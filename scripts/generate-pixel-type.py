"""Build the hero name from PP Mondwest's 25-cell pixel grid, hand-narrowed.

Run with the project venv: .venv/bin/python scripts/generate-pixel-type.py
Writes src/app/components/pixel-type.json (cells in grid units, y pointing down).
"""
from pathlib import Path
import json
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen

root = Path(__file__).resolve().parents[1]
font = TTFont(root / 'public/fonts/mondwest-neuebit-font/ppmondwest-regular.otf')
glyph_set, cmap = font.getGlyphSet(), font.getBestCmap()
CELL = font['head'].unitsPerEm / 25  # Mondwest is drawn on a 25-cells-per-em grid.

ROWS = ['tanisha', 'jain']
LEADING = 21          # baseline-to-baseline, in cells
TRACKING = 0          # extra spacing between letters, in cells
STITCHED = {(0, 0), (1, 0)}  # (row, index) of letters sewn in red: the t and the j

# Hand adjustments: drop one column from each wide counter so letters read tall and slim.
NARROW = {'n': [6], 'h': [6], 's': [5]}


def mondwest_cells(ch):
    pen = RecordingPen()
    glyph_set[cmap[ord(ch)]].draw(pen)
    polygons, current = [], []
    for op, args in pen.value:
        if op == 'moveTo':
            current = [args[0]]
        elif op == 'lineTo':
            current.append(args[0])
        else:
            polygons.append(current)

    def inside(x, y):
        hit = False
        for poly in polygons:
            for (x1, y1), (x2, y2) in zip(poly, poly[1:] + poly[:1]):
                if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
                    hit = not hit
        return hit

    advance = round(glyph_set[cmap[ord(ch)]].width / CELL)
    cells = {(c, r) for c in range(-3, advance + 3) for r in range(-8, 20) if inside((c + .5) * CELL, (r + .5) * CELL)}
    return cells, advance


def glyph(ch):
    cells, advance = mondwest_cells(ch)
    drop = NARROW.get(ch, [])
    cells = {(c - sum(k < c for k in drop), r) for c, r in cells if c not in drop}
    advance -= len(drop)
    if ch == 'j':
        # A proper j: the descender curves left into a hook with a small upturned terminal.
        stem = min(c for c, r in cells if r == 0)
        cells = {(c, r) for c, r in cells if r >= -3} | {(stem, -4), (stem + 1, -4), (stem - 1, -5), (stem, -5),
                                                          (stem - 4, -6), (stem - 3, -6), (stem - 2, -6), (stem - 1, -6),
                                                          (stem - 5, -5), (stem - 5, -4)}
    if ch == 't':
        # Redrawn so the t holds its own at the start of the name: full ascender height (matching the h),
        # a longer crossbar, and a fuller foot that sits on the baseline.
        T = [
            '...#.....',  # row 16
            *['..##.....'] * 5,
            '.#######.',  # crossbar on the x-height
            *['..##.....'] * 8,
            '..##...#.',
            '...####..',  # baseline
        ]
        cells = {(c, 16 - i) for i, row in enumerate(T) for c, v in enumerate(row) if v == '#'}
        advance = 9
    return cells, advance + TRACKING


def sewing_order(cells):
    """Greedy walk from the top-left cell, preferring touching neighbours, like working a chart."""
    remaining, path = set(cells), []
    current = min(remaining, key=lambda p: (p[1], p[0]))
    while remaining:
        remaining.discard(current)
        path.append(current)
        if not remaining:
            break
        current = min(remaining, key=lambda p: ((p[0] - current[0]) ** 2 + (p[1] - current[1]) ** 2, p[1], p[0]))
    return path


def stem_left(cells):
    """Left edge of a letter's main vertical stroke (its tallest column)."""
    counts = {}
    for c, _ in cells:
        counts[c] = counts.get(c, 0) + 1
    tallest = max(counts.values())
    return min(c for c, n in counts.items() if n >= tallest * .8)


# Shift each row so its first letter's stem lines up with the t's stem.
row_starts = [stem_left(glyph(ROWS[0][0])[0]) - stem_left(glyph(word[0])[0]) for word in ROWS]

letters = []
for row_index, word in enumerate(ROWS):
    x = row_starts[row_index]
    for index, ch in enumerate(word):
        cells, advance = glyph(ch)
        placed = [(x + c, row_index * LEADING - r) for c, r in cells]  # flip to y-down
        stitched = (row_index, index) in STITCHED
        letters.append({'char': ch, 'stitched': stitched,
                        'cells': sewing_order(placed) if stitched else sorted(placed, key=lambda p: (p[1], p[0]))})
        x += advance

all_cells = [p for letter in letters for p in letter['cells']]
left, top = min(x for x, _ in all_cells), min(y for _, y in all_cells)
for letter in letters:
    letter['cells'] = [[x - left, y - top] for x, y in letter['cells']]
width = max(x for x, _ in all_cells) - left + 1
height = max(y for _, y in all_cells) - top + 1

out = {'width': width, 'height': height, 'letters': letters}
(root / 'src/app/components/pixel-type.json').write_text(json.dumps(out, separators=(',', ':')) + '\n')
print(f'name grid {width}x{height}, stitched cells:', [len(l['cells']) for l in letters if l['stitched']])
