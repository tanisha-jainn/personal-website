'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Figtree } from 'next/font/google';
import { categories, work, type Category } from '../data/work';
import styles from './WorkSection.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '600'] });

// Only offer tabs that have something in them; "all" is always first and selected by default.
const tabs = categories.filter(category => work.some(piece => piece.categories.includes(category)));

export default function WorkSection() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const shown = work.filter(piece => filter === 'all' || piece.categories.includes(filter));

  return <section id="work" className={`${styles.section} ${figtree.className}`}>
    <header className={styles.intro}>
      <h2>my work</h2>
      <p>internships, side projects, and everything in between. filter below!</p>
      <div className={styles.tabs} role="group" aria-label="Filter work">
        {(['all', ...tabs] as const).map(tab => <button key={tab} type="button" aria-pressed={filter === tab} onClick={() => setFilter(tab)}>{tab}</button>)}
      </div>
    </header>
    <ul className={styles.grid}>
      {shown.map(piece => <li key={piece.slug}>
        <Link href={`/portfolio/${piece.slug}`} className={styles.card}>
          <span className={styles.cover} aria-hidden="true">
            {piece.cover.phones.map(src => <span key={src} className={styles.phone} style={{ backgroundImage: `url(${src})` }} />)}
          </span>
          <h3>{piece.name}</h3>
          <p>{piece.blurb}</p>
          <span className={styles.tags}>
            {piece.categories.map(category => <span key={category}>{category}</span>)}
            {piece.kind && <span className={styles.kind}>{piece.kind}</span>}
          </span>
          <span className={styles.date}>{piece.date}</span>
        </Link>
      </li>)}
    </ul>
  </section>;
}
