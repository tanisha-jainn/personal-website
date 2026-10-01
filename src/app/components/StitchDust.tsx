'use client';

import { useEffect } from 'react';
import styles from './StitchDust.module.css';

// Every so often as the mouse moves, a tiny faint cross-stitch drops off behind the cursor and fades away.
const SPACING = 26;      // px of movement between stitches
const CHANCE = 0.6;      // not every time, so it feels like dust rather than a trail
const MAX_ALIVE = 14;

export default function StitchDust() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layer = document.createElement('div');
    layer.className = styles.layer;
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    let lastX = 0, lastY = 0, travelled = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      travelled += Math.hypot(event.clientX - lastX, event.clientY - lastY);
      lastX = event.clientX; lastY = event.clientY;
      if (travelled < SPACING) return;
      travelled = 0;
      if (Math.random() > CHANCE || layer.childElementCount >= MAX_ALIVE) return;
      const stitch = document.createElement('span');
      stitch.className = styles.stitch;
      // Scatter slightly behind the tip so it reads as dust shed by the cursor, not a line.
      stitch.style.left = `${event.clientX + 4 + (Math.random() - .5) * 10}px`;
      stitch.style.top = `${event.clientY + 6 + (Math.random() - .5) * 10}px`;
      stitch.style.setProperty('--drift', `${(Math.random() - .5) * 8}px`);
      stitch.addEventListener('animationend', () => stitch.remove());
      layer.appendChild(stitch);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); layer.remove(); };
  }, []);
  return null;
}
