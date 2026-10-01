import styles from './StitchedHero.module.css';

export type IconKind = 'building' | 'tinkering' | 'cooking';

// Cross-stitch charts sewn onto the fabric inside the hoop: x = gray thread, o = red thread.
const charts: Record<IconKind, string[]> = {
  // Stacked blocks: work across product, engineering and marketing.
  building: [
    '..ooo..',
    '..ooo..',
    '..ooo..',
    'xxx.xxx',
    'xxx.xxx',
    'xxx.xxx',
  ],
  // A chubby little pointer: personal projects that make life easier.
  tinkering: [
    'xx.....',
    'xxx....',
    'xxxx...',
    'xxxxx..',
    'xxxxxx.',
    'xxxx...',
    'xx.xx..',
    '....xx.',
  ],
  // A bowl with chopsticks resting in it: the cooking blog.
  cooking: [
    '.....x.',
    '....x.x',
    '...x.x.',
    '..x.x..',
    'ooooooo',
    'ooooooo',
    '.ooooo.',
    '..ooo..',
  ],
};

// A real embroidery hoop is smooth wood, not pixels: outer ring, inner ring, and the clamp on top.
// Only the stitching on the fabric is drawn on the pixel grid.
const W = 40, H = 44, CX = 20, CY = 24, CELL = 2.6;

function stitchesFor(kind: IconKind) {
  const rows = charts[kind];
  const ox = CX - rows[0].length * CELL / 2, oy = CY - rows.length * CELL / 2;
  return rows.flatMap((row, y) => Array.from(row).flatMap((thread, x) =>
    thread === '.' ? [] : [{ x: ox + x * CELL, y: oy + y * CELL, red: thread === 'o' }]));
}

export default function FolderIcon({ kind }: { kind: IconKind }) {
  const inset = CELL * .15, far = CELL - inset;
  return <svg className={styles.icon} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
    <circle className={styles.fabric} cx={CX} cy={CY} r="15.4" />
    <circle className={styles.hoopInner} cx={CX} cy={CY} r="15.6" />
    <circle className={styles.hoopOuter} cx={CX} cy={CY} r="17.4" />
    <rect className={styles.clamp} x={CX - 3} y={CY - 20.6} width="6" height="3.6" rx=".8" />
    <rect className={styles.clamp} x={CX - 1} y={CY - 22.6} width="2" height="2.4" rx=".5" />
    {stitchesFor(kind).map(({ x, y, red }, i) => <path key={i} className={red ? `${styles.stitch} ${styles.redThread}` : styles.stitch}
      d={`M${x + inset} ${y + inset}L${x + far} ${y + far}M${x + far} ${y + inset}L${x + inset} ${y + far}`} />)}
  </svg>;
}
