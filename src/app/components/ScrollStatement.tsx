'use client';

import { useEffect, useRef, useState } from 'react';

const statement = 'stitching my life together :)';

export default function ScrollStatement() {
  const section = useRef<HTMLElement>(null);
  const [characters, setCharacters] = useState(statement.length);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const element = section.current;
    if (!element || !('IntersectionObserver' in window)) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let interval: ReturnType<typeof setInterval> | undefined;
    let started = false;

    const showImmediately = () => {
      if (interval) clearInterval(interval);
      observer?.disconnect();
      setCharacters(statement.length);
      setTyping(false);
    };

    if (motion.matches) return;
    setCharacters(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer?.disconnect();
      setTyping(true);
      let count = 0;
      interval = setInterval(() => {
        count += 1;
        setCharacters(count);
        if (count >= statement.length) {
          clearInterval(interval);
          setTyping(false);
        }
      }, 45);
    }, { threshold: 0.4 });
    observer.observe(element);
    const handleMotionChange = () => { if (motion.matches) showImmediately(); };
    motion.addEventListener('change', handleMotionChange);
    return () => {
      observer?.disconnect();
      if (interval) clearInterval(interval);
      motion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return <section ref={section} id="stitched-statement" className="scroll-statement">
    <h2>
      <span className="sr-only">{statement}</span>
      <span className="statement-space" aria-hidden="true">{statement}</span>
      <span className="statement-typed" aria-hidden="true">{statement.slice(0, characters)}{typing && <span className="typing-caret"/>}</span>
    </h2>
  </section>;
}
