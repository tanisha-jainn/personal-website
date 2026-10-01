'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Figtree } from 'next/font/google';
import styles from './StitchedIntro.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['500', '600'] });

const greeting = "hi! i'm tanisha, a senior at uiuc studying computer science + linguistics.";
const lead = "i like making things that are useful, accessible, and a little bit lovely. so far, i've:";
const threads = [
  "grown sign-ups 16% by repositioning coinbase advanced's homepage as a product marketing intern",
  "shipped ai video ads to 1M+ viewers at poshmark and pm'd a 92%-precision vision model at trajektory",
  "built niche, a discovery engine for indie fashion brands, and researched llm prompting for microsoft with mit's break through tech ai",
];
const closing = "off the clock: cooking, embroidery, matcha, and the eagles. different threads, one piece. that's why everything here is stitched together.";

// Where the thread passes under each column (0–1 along its length), so a column lights up as the thread reaches it.
const ARRIVALS = [0.17, 0.5, 0.83];
// The thread: one loose curve through all three columns, in a 1000×90 box.
const THREAD = 'M0 52C70 18 120 18 166 45S262 82 333 52 430 14 500 45 600 82 666 52 780 14 833 45 940 80 1000 40';
const KNOTS = [[166, 45], [500, 45], [833, 45]];

export default function StitchedIntro() {
  const section = useRef<HTMLElement>(null);
  const [typed, setTyped] = useState(greeting.length);
  const [typing, setTyping] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = section.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Type the greeting once the section scrolls into view.
    let interval: ReturnType<typeof setInterval> | undefined;
    setTyped(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setTyping(true);
      let count = 0;
      interval = setInterval(() => {
        setTyped(++count);
        if (count >= greeting.length) { clearInterval(interval); setTyping(false); }
      }, 32);
    }, { threshold: 0.3 });
    observer.observe(element);

    // While the section is pinned, scrolling sews the thread from left to right.
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // The thread finishes a little before the end of the pinned scroll, leaving a beat for the closing line.
  const sewn = Math.min(1, progress / 0.85);

  return <section ref={section} id="stitched-statement" className={`${styles.intro} ${figtree.className}`}>
    <div className={styles.pinned}>
      <h2 className={styles.greeting}>
        <span className="sr-only">{greeting}</span>
        <span aria-hidden="true" className={styles.space}>{greeting}</span>
        <span aria-hidden="true" className={styles.typed}>{greeting.slice(0, typed)}{typing && <span className={styles.caret} />}</span>
      </h2>
      <div className={styles.module}>
        <p className={styles.lead}>{lead}</p>
        <svg className={styles.thread} viewBox="0 0 1000 90" aria-hidden="true" focusable="false">
          <mask id="intro-thread-sewn">
            <path d={THREAD} pathLength={1} className={styles.reveal} style={{ strokeDashoffset: 1 - sewn } as CSSProperties} />
          </mask>
          <path d={THREAD} className={styles.stitches} mask="url(#intro-thread-sewn)" />
          {KNOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" className={styles.knot} data-tied={sewn >= ARRIVALS[i]} />)}
        </svg>
        <ul className={styles.columns}>
          {threads.map((text, i) => <li key={i} data-active={sewn >= ARRIVALS[i]}>{text}</li>)}
        </ul>
        <p className={styles.closing} data-shown={progress >= 0.9}>{closing}</p>
      </div>
    </div>
  </section>;
}
