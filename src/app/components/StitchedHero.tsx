import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Figtree } from 'next/font/google';
import FolderIcon, { type IconKind } from './FolderIcon';
import name from './pixel-type.json';
import styles from './StitchedHero.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['600'] });

// Timeline (seconds): the name is already there. The needle pulls red thread off the spool in a running
// stitch back to the end of "jain", then cross-stitches the t and the j two rows at a time, at a steady
// rhythm. Finally the spool reels its loose thread back in and hops along the baseline to sit after "jain".
const SEW_START = 0.4;
const RUN_TIME = 0.032;
const JUMP_TIME = 0.25;
const ROWS_PER_STEP = 2;
const STEP_TIME = 0.085;
const REEL_PAUSE = 0.2;
const REEL_TIME = 0.7;

// Rows overlap slightly so scaled pixels never show hairline seams between them.
const square = ([x, y]: number[]) => `M${x} ${y}h1v1.06h-1z`;
// Each X spans its whole pixel so stitched letters line up edge-to-edge with the solid ones.
const cross = ([x, y]: number[]) => `M${x + .1} ${y + .1}L${x + .9} ${y + .9}M${x + .9} ${y + .1}L${x + .1} ${y + .9}`;
const toPath = (points: number[][]) => points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join('');

const plain = name.letters.filter(letter => !letter.stitched).flatMap(letter => letter.cells);
const crosses = name.letters.filter(letter => letter.stitched).flatMap(letter => letter.cells);

// A small spool of red thread on the baseline after "jain", in flat pixel colours on a half-size grid.
// The ends are clearly wider than the thread so it reads as a spool: L/M/D = an end's top face, rim and underside;
// h/r/w/d = the thread's light edge, body, darker winding rows and shadow edge; c = the bare core under the thread.
const SPOOL_PX = 0.5;
const SPOOL_X = 62, SPOOL_Y = 35, SPOOL_REST_X = 36.5;
const SPOOL = [
  '..LLLLLLL..',
  '.MMMMMMMMM.',
  '...hrrrd...',
  '...hwwwd...',
  '...hrrrd...',
  '...hrrrd...',
  '...hwwwd...',
  '...hrrrd...',
  '.MMMMMMMMM.',
  '..DDDDDDD..',
];
const SPOOL_COLORS: Record<string, string> = {
  L: '#b4b4b9', M: '#88888e', D: '#646469', h: '#d4625b', r: '#c4463f', w: '#a83b35', d: '#99352f', c: '#d9d9dd',
};
const THREAD = ['h', 'r', 'w', 'd'];
const spoolPixel = ([x, y]: number[]) => `M${x} ${y}h${SPOOL_PX}v${SPOOL_PX + .03}h-${SPOOL_PX}z`;
const spoolCells = (kind: string) => SPOOL.flatMap((row, y) => Array.from(row).flatMap((c, x) => c === kind ? [[SPOOL_X + x * SPOOL_PX, SPOOL_Y + y * SPOOL_PX]] : []));
const spoolLayer = (kinds: string[]) => kinds.map(kind => <path key={kind} fill={SPOOL_COLORS[kind]} d={spoolCells(kind).map(spoolPixel).join('')} />);

// The loose thread from the spool back to the foot of the last n, with one loop, smoothed with a Catmull-Rom spline.
const SQUIGGLE = [[63.4, 38.2], [61, 37.4], [59.6, 38.4], [56, 36.2], [53.5, 38.6], [51, 36.4], [49.6, 33.8], [50.6, 31.6], [52.4, 32.6], [51.4, 35.6],
  [48.4, 38.6], [45.4, 37], [42.4, 38.9], [39.4, 37.4], [36.8, 38.9], [35.3, 39.6]];

function spline(points: number[][], steps = 12) {
  const out: number[][] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const [p0, p1, p2, p3] = [points[Math.max(i - 1, 0)], points[i], points[i + 1], points[Math.min(i + 2, points.length - 1)]];
    for (let s = 0; s < steps; s++) {
      const t = s / steps, t2 = t * t, t3 = t2 * t;
      out.push([0, 1].map(k => .5 * (2 * p1[k] + (p2[k] - p0[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (3 * p1[k] - p0[k] - 3 * p2[k] + p3[k]) * t3)));
    }
  }
  return [...out, points[points.length - 1]];
}

// Running stitch: short visible segments with small gaps along the curve.
function runningStitches(points: number[][], stitch = 1.15, gap = .45) {
  const result: number[][][] = [];
  let current: number[][] = [points[0]], travelled = 0, sewing = true;
  for (let i = 1; i < points.length; i++) {
    const [ax, ay] = points[i - 1], [bx, by] = points[i];
    travelled += Math.hypot(bx - ax, by - ay);
    if (sewing) current.push(points[i]);
    if (travelled >= (sewing ? stitch : gap)) {
      if (sewing) result.push(current);
      sewing = !sewing; travelled = 0; current = [points[i]];
    }
  }
  if (sewing && current.length > 1) result.push(current);
  return result;
}
const squiggle = runningStitches(spline(SQUIGGLE));

// The t and j are sewn a couple of rows at a time, top to bottom, so each step is a visible group of stitches.
const steps = name.letters.filter(letter => letter.stitched).flatMap(letter => {
  const rows = Array.from(new Set(letter.cells.map(([, y]) => y))).sort((a, b) => a - b);
  return Array.from({ length: Math.ceil(rows.length / ROWS_PER_STEP) }, (_, i) => {
    const group = rows.slice(i * ROWS_PER_STEP, (i + 1) * ROWS_PER_STEP);
    return letter.cells.filter(([, y]) => group.includes(y)).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  });
});

// Needle stops: the spool, the end of every running stitch, then the last cell of every group.
const crossStart = SEW_START + squiggle.length * RUN_TIME + JUMP_TIME;
const sewEnd = crossStart + steps.length * STEP_TIME;
const stops: [number, number, number][] = [
  [SEW_START, SQUIGGLE[0][0], SQUIGGLE[0][1]],
  ...squiggle.map((stitch, i) => { const [x, y] = stitch[stitch.length - 1]; return [SEW_START + (i + 1) * RUN_TIME, x, y] as [number, number, number]; }),
  ...steps.map((cells, i) => { const [x, y] = cells[cells.length - 1]; return [crossStart + (i + 1) * STEP_TIME, x + .5, y + .5] as [number, number, number]; }),
];
const sewDuration = sewEnd - SEW_START;
const reelStart = sewEnd + REEL_PAUSE;
// Each loose stitch disappears as the spool passes over it on the way back.
const reelDelay = (stitch: number[][]) => reelStart + (SPOOL_X - stitch[0][0]) / (SPOOL_X - SPOOL_REST_X) * REEL_TIME;
const [, restX, restY] = stops[stops.length - 1];
const needleKeyframes = `@keyframes ${styles.sew}{${stops.map(([t, x, y]) =>
  `${((t - SEW_START) / sewDuration * 100).toFixed(2)}%{transform:translate(${x.toFixed(2)}px,${y.toFixed(2)}px)}`).join('')}}`;

// Each folder fans out three small screen grabs when it opens. Until the real ones exist, leave `src`
// empty and a placeholder card is drawn; then drop images in /public/folders and set `src` and `alt`.
type Grab = { src?: string; alt?: string };
const folders: { label: string; href: string; icon: IconKind; grabs: [Grab, Grab, Grab] }[] = [
  { label: 'building', href: '/#work', icon: 'building', grabs: [{}, {}, {}] },
  { label: 'tinkering', href: '/portfolio', icon: 'tinkering', grabs: [{}, {}, {}] },
  { label: '& cooking', href: '/passions', icon: 'cooking', grabs: [{}, {}, {}] },
];

// Positions (percent of the folder) for the sparkles that pop up around the fanned-out grabs on hover.
const sparkles = [{ x: -22, y: -112, s: 1 }, { x: 46, y: -138, s: .75 }, { x: 112, y: -104, s: .9 }];

export default function StitchedHero() {
  return <section className={styles.hero}>
    <h1 className={styles.name} style={{ aspectRatio: `${name.width}/${name.height}` }}>
      <span className="sr-only">Tanisha Jain</span>
      <svg viewBox={`0 0 ${name.width} ${name.height}`} aria-hidden="true" focusable="false" shapeRendering="crispEdges">
        <defs>
          <linearGradient id="name-ink" x1="0" y1="0" x2="0" y2={name.height} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9b9ba0" />
            <stop offset="1" stopColor="#5e5e63" />
          </linearGradient>
        </defs>
        <path fill="url(#name-ink)" d={plain.map(square).join('')} />
        {/* The t and j start as a faint printed pattern and are sewn over in cross-stitch. */}
        <path className={styles.pattern} d={crosses.map(square).join('')} />
        {/* The spool's red band visibly thins as the name uses up its thread. */}
        <g className={styles.spool} style={{ '--sew-start': `${SEW_START}s`, '--sew-duration': `${sewDuration}s`,
          '--reel-start': `${reelStart}s`, '--reel-time': `${REEL_TIME}s`, '--travel': `${SPOOL_REST_X - SPOOL_X}px` } as CSSProperties}>
          <g className={styles.hop}>
            <path fill={SPOOL_COLORS.c} d={THREAD.flatMap(spoolCells).map(spoolPixel).join('')} />
            <g className={styles.band}>{spoolLayer(THREAD)}</g>
            {spoolLayer(['L', 'M', 'D'])}
            {/* Once it is wound back up, a little leftover end curls off the thread. */}
            <path className={styles.looseEnd} shapeRendering="geometricPrecision" pathLength={1}
              d={`M${SPOOL_X + 1.6} ${SPOOL_Y + 3.2}c-.9.1-1.4.8-1.1 1.5s1 .5.8-.2`} />
          </g>
        </g>
        <g className={styles.thread} shapeRendering="geometricPrecision">
          {squiggle.map((stitch, i) => <path key={i} className={styles.run} d={toPath(stitch)} pathLength={1}
            style={{ animationDelay: `${SEW_START + i * RUN_TIME}s, ${reelDelay(stitch)}s` }} />)}
          {steps.flatMap((cells, i) => cells.map(cell => <path key={`${i}-${cell}`} className={styles.cross} d={cross(cell)} pathLength={1}
            style={{ animationDelay: `${crossStart + i * STEP_TIME}s` }} />))}
        </g>
        <style>{needleKeyframes}</style>
        <g className={styles.needle} shapeRendering="geometricPrecision"
          style={{ animationDuration: `.25s, ${sewDuration}s`, animationDelay: `${SEW_START - .25}s, ${SEW_START}s`,
            transform: `translate(${restX}px,${restY}px)` }}>
          {/* A short length of thread hangs loose from the eye, like a real threaded needle. */}
          <path className={styles.needleThread} d="M-3.15 4.72c.5 1.3 2 1.6 2.3 2.9s-.9 1.8-.3 2.7" />
          <path d="M0 0L-3.6 5.4" />
          <ellipse cx="-3.15" cy="4.72" rx=".22" ry=".55" transform="rotate(34 -3.15 4.72)" />
        </g>
      </svg>
    </h1>
    <p className={`${styles.tagline} ${figtree.className}`}>cs + linguistics @ uiuc</p>
    <nav className={styles.folders} aria-label="Explore">
      {folders.map(({ label, href, icon, grabs }) => <Link key={label} href={href} className={styles.folderLink}>
        <span className={styles.folder} aria-hidden="true">
          <span className={styles.back} />
          {grabs.map(({ src, alt }, j) => <span key={j} className={styles.grab}>
            {src ? <Image src={src} alt={alt ?? ''} fill sizes="160px" /> : <span className={styles.placeholder}><i /><b /><b /></span>}
          </span>)}
          <span className={styles.front}>
            <FolderIcon kind={icon} />
          </span>
          {sparkles.map(({ x, y, s }, j) => <svg key={j} className={styles.sparkle} viewBox="-5 -5 10 10"
            style={{ left: `${x}%`, top: `${y}%`, width: `${s * 18}%`, transitionDelay: `${j * .06}s` }}>
            <path d="M0-5C.6-1.2 1.2-.6 5 0 1.2.6.6 1.2 0 5-.6 1.2-1.2.6-5 0-1.2-.6-.6-1.2 0-5Z" />
          </svg>)}
        </span>
        <span className={styles.label}>{label}</span>
      </Link>)}
    </nav>
    <a className="guide-arrow hero-arrow" href="#stitched-statement" aria-label="Continue to the next section">↓</a>
  </section>;
}
