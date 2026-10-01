'use client';

import { useEffect } from 'react';

// Once the needle has finished sewing the name, hand it over to the visitor: the cursor becomes the needle.
export default function NeedleCursor({ at }: { at: number }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    const timer = window.setTimeout(() => root.classList.add('needle-cursor'), reduced ? 0 : at * 1000);
    return () => { window.clearTimeout(timer); root.classList.remove('needle-cursor'); };
  }, [at]);
  return null;
}
