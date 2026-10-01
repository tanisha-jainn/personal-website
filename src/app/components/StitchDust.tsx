'use client';

import { useEffect } from 'react';
import styles from './StitchDust.module.css';

// As the mouse moves it leaves a short, loose running stitch behind it, about as dense as the spool's thread
// but hand-made rather than ruled: each stitch is nudged off the path, tilted a little, varies in length,
// now and then one is skipped, and each fades on its own timing, so it shimmers like pixie dust.
const SPACING = 11;      // px along the path between stitches (spool thread: ~7px stitch + ~3px gap)
const SKIP = 0.15;       // chance a stitch is left out
const NUDGE = 2.5;       // px a stitch can sit off the path
const TILT = 0.35;       // rad a stitch can turn away from the path
const MAX_ALIVE = 40;

const between = (min: number, max: number) => min + Math.random() * (max - min);

export default function StitchDust() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layer = document.createElement('div');
    layer.className = styles.layer;
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    let anchor: { x: number; y: number } | null = null;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const x = event.clientX, y = event.clientY;
      if (!anchor) { anchor = { x, y }; return; }
      const distance = Math.hypot(x - anchor.x, y - anchor.y);
      if (distance < SPACING) return;
      const angle = Math.atan2(y - anchor.y, x - anchor.x);
      const ux = Math.cos(angle), uy = Math.sin(angle);
      // Fill the whole stretch moved since the last stitch, so fast and slow moves look the same.
      for (let i = 0; i < Math.floor(distance / SPACING); i++) {
        anchor = { x: anchor.x + ux * SPACING, y: anchor.y + uy * SPACING };
        if (Math.random() < SKIP || layer.childElementCount >= MAX_ALIVE) continue;
        const nudge = between(-NUDGE, NUDGE);
        const stitch = document.createElement('span');
        stitch.className = styles.stitch;
        stitch.style.left = `${anchor.x - uy * nudge}px`;
        stitch.style.top = `${anchor.y + ux * nudge}px`;
        stitch.style.width = `${between(5.5, 8).toFixed(1)}px`;
        stitch.style.setProperty('--angle', `${angle + between(-TILT, TILT)}rad`);
        stitch.style.setProperty('--start', between(.75, .95).toFixed(2));
        stitch.style.animationDuration = `${between(.45, .75).toFixed(2)}s`;
        stitch.addEventListener('animationend', () => stitch.remove());
        layer.appendChild(stitch);
      }
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); layer.remove(); };
  }, []);
  return null;
}
