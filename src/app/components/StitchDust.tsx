'use client';

import { useEffect } from 'react';
import styles from './StitchDust.module.css';

// As the mouse moves, it leaves a faint running stitch behind it, like the loose thread off the spool:
// short single stitches laid along the direction of travel, with gaps between, each fading quickly.
// Matches the spool thread's running stitch on screen: ~7px stitches with ~3px gaps.
const SPACING = 9.5;     // px from the start of one stitch to the start of the next
const MAX_ALIVE = 60;

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
      // Lay every stitch along the way, so a fast flick still leaves an unbroken running stitch.
      const angle = Math.atan2(y - anchor.y, x - anchor.x);
      const dx = Math.cos(angle) * SPACING, dy = Math.sin(angle) * SPACING;
      for (let i = 0; i < Math.floor(distance / SPACING); i++) {
        if (layer.childElementCount >= MAX_ALIVE) { anchor = { x, y }; break; }
        const stitch = document.createElement('span');
        stitch.className = styles.stitch;
        stitch.style.left = `${anchor.x}px`;
        stitch.style.top = `${anchor.y}px`;
        stitch.style.setProperty('--angle', `${angle}rad`);
        stitch.addEventListener('animationend', () => stitch.remove());
        layer.appendChild(stitch);
        anchor = { x: anchor.x + dx, y: anchor.y + dy };
      }
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); layer.remove(); };
  }, []);
  return null;
}
