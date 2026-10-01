'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CaseVideo.module.css';

// A muted, looping clip that plays only while on screen, with a small button to turn the sound on.
export default function CaseVideo({ src, poster, label, shape = 'phone' }: {
  src: string; poster: string; label: string; shape?: 'phone' | 'wide';
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.play().catch(() => {});
      else element.pause();
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className={`${styles.frame} ${styles[shape]}`}>
    <video ref={video} src={src} poster={poster} muted={muted} loop playsInline preload="metadata" aria-label={label} controls={false} />
    <button type="button" className={styles.sound} onClick={() => { setMuted(!muted); video.current?.play().catch(() => {}); }}
      aria-label={muted ? `Turn on sound: ${label}` : `Mute: ${label}`}>
      {muted ? 'sound off' : 'sound on'}
    </button>
  </div>;
}
