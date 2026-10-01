'use client';

import { useRef } from 'react';
import CaseVideo from './CaseVideo';
import styles from './MediaCarousel.module.css';

export type Slide = { src: string; poster?: string; title: string; note: string };

// A swipeable row of posts (videos or screenshots), with arrow buttons that step one slide at a time.
export default function MediaCarousel({ slides, label }: { slides: Slide[]; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const step = (direction: number) => {
    const el = track.current;
    const slide = el?.querySelector('li');
    if (!el || !slide) return;
    el.scrollBy({ left: direction * (slide.getBoundingClientRect().width + 20), behavior: 'smooth' });
  };

  return <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label={label}>
    <ul ref={track} className={styles.track}>
      {slides.map(({ src, poster, title, note }, i) => <li key={src} aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}: ${title}`}>
        {src.endsWith('.mp4')
          ? <CaseVideo src={src} poster={poster ?? ''} label={`${title}: ${note}`} shape="post" />
          // eslint-disable-next-line @next/next/no-img-element
          : <img src={src} alt={`${title}: ${note}`} className={styles.still} />}
        <p className={styles.caption}><span>{title}</span>{note}</p>
      </li>)}
    </ul>
    <div className={styles.controls}>
      <button type="button" onClick={() => step(-1)} aria-label="Previous slide">←</button>
      <button type="button" onClick={() => step(1)} aria-label="Next slide">→</button>
    </div>
  </div>;
}
