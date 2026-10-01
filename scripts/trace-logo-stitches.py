"""Regenerate SVG stitch geometry from the untouched logo (requires Pillow).
Run: python3 scripts/trace-logo-stitches.py
Only exterior boundaries are used; counters remain unadorned.
"""
from PIL import Image, ImageFilter
from pathlib import Path
import math, json, hashlib

root = Path(__file__).resolve().parents[1]
source = root / 'public/art/tanisha-name-stitch-crop.png'
im = Image.open(source).convert('RGB')
w, h = im.size
# Three pixels of breathing room outside the actual dark ink.
mask = im.convert('L').point(lambda v: 255 if v < 165 else 0).filter(ImageFilter.MaxFilter(7))
pixels = mask.load()
def ink(x, y):
    return 0 <= x < w and 0 <= y < h and pixels[x, y] > 0
edges = {}
for y in range(h):
    for x in range(w):
        if not ink(x, y): continue
        for outside, a, b in [((x,y-1),(x,y),(x+1,y)),((x+1,y),(x+1,y),(x+1,y+1)),((x,y+1),(x+1,y+1),(x,y+1)),((x-1,y),(x,y+1),(x,y))]:
            if not ink(*outside): edges[a] = b
loops = []
while edges:
    start = next(iter(edges)); p = start; loop = []
    while p in edges:
        loop.append(p); p = edges.pop(p)
        if p == start: break
    area = sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(loop,loop[1:]+loop[:1])) / 2
    if area > 25: loops.append(loop)
# Associate detached dots with their letter, in reading order.
top_centers = [49,155,256,358,459,561,664]
bottom_centers = [211,308,408,508]
groups = [[] for _ in range(11)]
for loop in loops:
    cx = (min(p[0] for p in loop)+max(p[0] for p in loop))/2
    cy = (min(p[1] for p in loop)+max(p[1] for p in loop))/2
    centers = top_centers if cy < 190 else bottom_centers
    index = min(range(len(centers)), key=lambda i: abs(centers[i]-cx)) + (0 if cy < 190 else 7)
    # Smooth pixel stair-steps while retaining the block lettering's corners.
    points = [tuple(sum(loop[(i+j)%len(loop)][k] for j in range(-2,3))/5 for k in (0,1)) for i in range(len(loop))]
    lengths = [0.0]
    for a,b in zip(points,points[1:]+points[:1]): lengths.append(lengths[-1]+math.dist(a,b))
    def at(distance):
        import bisect
        n = min(bisect.bisect_right(lengths,distance)-1,len(points)-1)
        t = (distance-lengths[n])/(lengths[n+1]-lengths[n])
        a,b = points[n],points[(n+1)%len(points)]
        return tuple(a[k]+(b[k]-a[k])*t for k in (0,1))
    count = round(lengths[-1]/10)
    for n in range(count):
        start = (n+0.16)*lengths[-1]/count
        end = start + (5.1 + 0.45*math.sin(n*2.4))*lengths[-1]/count/10
        a,m,b = at(start),at((start+end)/2),at(end)
        groups[index].append('M%.2f %.2fQ%.2f %.2f %.2f %.2f' % (*a,*m,*b))
assert all(groups), 'Every letter must have stitches'
output = {'width':w,'height':h,'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'letters':groups}
(root/'src/app/components/logo-stitches.json').write_text(json.dumps(output,separators=(',',':'))+'\n')
print(f'{len(loops)} exterior contours; stitches per letter: {[len(g) for g in groups]}')
