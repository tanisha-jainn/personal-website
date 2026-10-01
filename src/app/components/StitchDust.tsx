'use client';

import { useEffect } from 'react';
import styles from './StitchDust.module.css';

// As the mouse moves, it leaves a faint running stitch behind it, like the loose thread off the spool:
// short single stitches laid along the direction of travel, with gaps between, each fading quickly.
const SPACING = 15;      // px from the start of one stitch to the start of the next
const MAX_ALIVE = 24;

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
      if (layer.childElementCount < MAX_ALIVE) {
        const stitch = document.createElement('span');
        stitch.className = styles.stitch;
        stitch.style.left = `${anchor.x}px`;
        stitch.style.top = `${anchor.y}px`;
        stitch.style.setProperty('--angle', `${Math.atan2(y - anchor.y, x - anchor.x)}rad`);
        stitch.addEventListener('animationend', () => stitch.remove());
        layer.appendChild(stitch);
      }
      anchor = { x, y };
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); layer.remove(); };
  }, []);
  return null;
}
