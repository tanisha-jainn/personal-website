import Link from 'next/link';
import { Figtree } from 'next/font/google';
import CaseVideo from '../../components/CaseVideo';
import styles from '../case.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'The Met: where my marketing started',
  description: 'Helping run Met Teens, The Met’s account for teenagers, as a high school digital media intern.',
};

// Fill these in to show the account links and the work itself. Empty entries are simply left out.
const links: { label: string; href: string }[] = [
  // { label: 'Met Teens on Instagram', href: 'https://www.instagram.com/…' },
  // { label: 'Met Teens on TikTok', href: 'https://www.tiktok.com/@…' },
];
// Drop images or videos in /public/work/the-met/ and list them here.
const media: { src: string; poster?: string; caption: string }[] = [];

export default function MetCaseStudy() {
  return <article className={`${styles.page} ${figtree.className}`}>
    <Link className={styles.back} href="/#work">← all work</Link>

    <header className={styles.header}>
      <p className={styles.eyebrow}>the met · digital media intern (high school) · summer 2022</p>
      <h1>Making a museum feel like it’s for teens.</h1>
      <p className={styles.dek}>
        This is where my marketing started. As a high school intern on The Met’s digital media team, I helped run
        Met Teens, the museum’s account for teenagers.
      </p>
    </header>

    <section className={styles.section}>
      <h2>The goal</h2>
      <p>
        The Met is a place rich with history, and also with pop culture, from the art on its walls to the Met Gala.
        Our job was to show teenagers where they fit into all of it.
      </p>
    </section>

    <section className={styles.section}>
      <h2>What we made</h2>
      <ul className={styles.list}>
        <li><b>Events for teens,</b> and the posts that got people to them.</li>
        <li><b>Behind the scenes</b> of the people working at the museum right now.</li>
        <li><b>A day in the life</b> of fellow interns doing preservation work, keeping the art itself safe.</li>
      </ul>
      {media.length > 0 && <div className={styles.gallery}>
        {media.map(({ src, poster, caption }) => <figure key={src}>
          {src.endsWith('.mp4')
            ? <CaseVideo src={src} poster={poster ?? ''} label={caption} />
            // eslint-disable-next-line @next/next/no-img-element
            : <img src={src} alt={caption} className={styles.still} />}
          <figcaption>{caption}</figcaption>
        </figure>)}
      </div>}
      {links.length > 0 && <p className={styles.links}>
        {links.map(({ label, href }) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}
      </p>}
    </section>

    <section className={styles.section}>
      <h2>Why it’s here</h2>
      <p>
        People really enjoyed seeing the museum this way. Looking back, it was my first real taste of marketing:
        figuring out who you’re talking to, and telling a familiar story in a way that makes room for them.
      </p>
    </section>
  </article>;
}
