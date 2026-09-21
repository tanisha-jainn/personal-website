'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = container.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || motion.matches || !('IntersectionObserver' in window)) return;
    // Do not hide content already in view when restoring a scrolled page.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add('reveal-pending');
    const reveal = () => {
      element.classList.remove('reveal-pending');
      observer.disconnect();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal();
    }, { threshold: 0.12 });
    observer.observe(element);
    const handleMotionChange = () => { if (motion.matches) reveal(); };
    element.addEventListener('focusin', reveal);
    motion.addEventListener('change', handleMotionChange);
    return () => {
      observer.disconnect();
      element.classList.remove('reveal-pending');
      element.removeEventListener('focusin', reveal);
      motion.removeEventListener('change', handleMotionChange);
    };
  }, []);
  return <div ref={container} className="scroll-reveal">{children}</div>;
}
