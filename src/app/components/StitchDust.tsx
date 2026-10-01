'use client';

import { useEffect } from 'react';
import styles from './StitchDust.module.css';

// As the mouse moves, it now and then sheds a single loose stitch, the same size and thread as the spool's
// running stitch, scattered just off the path at a slight tilt and fading quickly, like pixie dust.
const SPACING = 24;      // px of movement between chances to shed a stitch
const CHANCE = 0.65;     // not every time, so it scatters instead of drawing a line
const SCATTER = 7;       // px a stitch can land away from the cursor
const TILT = 0.6;        // rad a stitch can turn away from the direction of travel
const MAX_ALIVE = 12;

export default function StitchDust() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layer = document.createElement('div');
    layer.className = styles.layer;
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    let last: { x: number; y: number } | null = null, travelled = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const x = event.clientX, y = event.clientY;
      if (!last) { last = { x, y }; return; }
      const angle = Math.atan2(y - last.y, x - last.x);
      travelled += Math.hypot(x - last.x, y - last.y);
      last = { x, y };
      if (travelled < SPACING) return;
      travelled = 0;
      if (Math.random() > CHANCE || layer.childElementCount >= MAX_ALIVE) return;
      const stitch = document.createElement('span');
      stitch.className = styles.stitch;
      stitch.style.left = `${x + (Math.random() - .5) * 2 * SCATTER}px`;
      stitch.style.top = `${y + (Math.random() - .5) * 2 * SCATTER}px`;
      stitch.style.setProperty('--angle', `${angle + (Math.random() - .5) * 2 * TILT}rad`);
      stitch.addEventListener('animationend', () => stitch.remove());
      layer.appendChild(stitch);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); layer.remove(); };
  }, []);
  return null;
}
