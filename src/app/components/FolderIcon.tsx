'use client';

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

type Kind = 'portfolio' | 'studio' | 'joy';
// Separate continuous contours prevent stitches from jumping between details.
const shapes: Record<Kind, string[]> = {
  portfolio: ['M17 20H47Q52 20 52 25V45Q52 50 47 50H17Q12 50 12 45V25Q12 20 17 20Z', 'M24 20V15Q24 12 27 12H37Q40 12 40 15V20', 'M12 31Q32 43 52 31', 'M29 32H35V40H29Z'],
  studio: ['M17 43L14 54L25 51L53 23Q56 20 53 17L50 14Q47 11 44 14L17 43Z', 'M17 43L25 51', 'M39 19L48 28', 'M15 13V23', 'M10 18H20', 'M43 44V56', 'M37 50H49'],
  joy: ['M16 36H48L43 56H21L16 36Z', 'M26 41L28 52', 'M38 41L36 52', 'M15 35C11 30 15 24 21 24C20 18 26 14 32 17C38 14 44 18 43 24C49 24 53 30 49 35Z', 'M32 17S23 12 23 7C23 2 30 1 32 6C34 1 41 2 41 7C41 12 32 17 32 17Z'],
};

type Stitch = { d: string; heart: boolean };

export default function FolderIcon({ kind }: { kind: Kind }) {
  const geometry = useRef<SVGGElement>(null);
  const [stitches, setStitches] = useState<Stitch[]>([]);
  const [finished, setFinished] = useState(false);

  useLayoutEffect(() => {
    const result: Stitch[] = [];
    geometry.current?.querySelectorAll('path').forEach((path, index) => {
      const heart = kind === 'joy' && index === shapes.joy.length - 1;
      const length = path.getTotalLength();
      const count = Math.max(1, Math.round(length / (heart ? 3.6 : 5.5)));
      const step = length / count;
      for (let i = 0; i < count; i++) {
        const points = [0, .16, .32, .48, .64].map(t => path.getPointAtLength((i + t) * step));
        result.push({ heart, d: points.map((p, j) => `${j ? 'L' : 'M'}${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ') });
      }
    });
    setStitches(result);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) setFinished(true);
    const stop = () => { if (motion.matches) setFinished(true); };
    motion.addEventListener('change', stop);
    return () => motion.removeEventListener('change', stop);
  }, [kind]);

  return <svg className={`folder-icon folder-icon-${kind}`} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" data-stitched={finished}>
    <g ref={geometry} visibility="hidden">{shapes[kind].map((d, i) => <path key={i} d={d} />)}</g>
    {stitches.map(({ d, heart }, i) => <path key={i} d={d} pathLength={1}
      className={`icon-stitch${heart ? ' cupcake-heart' : ''}${finished ? '' : ' icon-stitch-sewing'}`}
      style={finished ? undefined : { '--icon-delay': `${0.2 + i * 2.6 / stitches.length}s`, '--icon-duration': `${2.6 / stitches.length}s` } as CSSProperties}
      onAnimationEnd={i === stitches.length - 1 ? () => setFinished(true) : undefined}
    />)}
  </svg>;
}
