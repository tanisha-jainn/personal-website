import Link from 'next/link';
import { Figtree } from 'next/font/google';
import CaseVideo from '../../components/CaseVideo';
import styles from '../case.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'The Met: where my marketing started',
  description: 'Helping run Met Teens, The Met’s account for teenagers, as a high school digital media intern.',
};

const links = [
  { label: '@metteens on Instagram', href: 'https://www.instagram.com/metteens/' },
];

const v = (name: string) => ({ src: `/work/the-met/${name}.mp4`, poster: `/work/the-met/${name}.jpg` });
const posts = [
  { ...v('teen-fridays-reel'), title: 'teen fridays', note: 'A reel with @metmuseum: “POV: you’re a teen in NYC with your friends.” 5,000+ likes.' },
  { ...v('post-scroll'), title: 'events', note: 'Getting teens to programs like the Science of Color career lab, tied to the Chroma exhibition.' },
  { ...v('conservation-carousel'), title: 'a day in the life', note: 'Following a fellow high school intern in photograph conservation, cataloguing lantern slides.' },
  { ...v('art-carousel'), title: 'in the galleries', note: 'Sketchbook drawings side by side with the works that inspired them.' },
];

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
      <div className={styles.heroMedia}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/the-met/instagram-feed.jpg" alt="The @metteens Instagram feed" className={styles.screen} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/the-met/interns.jpg" alt="The summer 2022 Met Teens interns on the roof: “MET WHO?”" className={styles.screen} />
      </div>
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
      <p>
        Events for teens, behind the scenes of the people working at the museum, and a day in the life of fellow
        interns doing preservation work, keeping the art itself safe.
      </p>
      <div className={styles.posts}>
        {posts.map(({ src, poster, title, note }) => <figure key={src}>
          <CaseVideo src={src} poster={poster} label={`${title}: ${note}`} shape="post" />
          <figcaption><span>{title}</span>{note}</figcaption>
        </figure>)}
      </div>
      <p className={styles.links}>
        {links.map(({ label, href }) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}
      </p>
    </section>

    <section className={styles.section}>
      <h2>Why it’s here</h2>
      <p>
        People really enjoyed seeing the museum this way. Looking back, it was my first real taste of marketing:
        figuring out who you’re talking to, and telling a familiar story in a way that makes room for them.
      </p>
    </section>

    {/* A little sign-off: my favorite painting in the museum. */}
    <figure className={styles.signoff}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/the-met/fave-painting.jpg" alt="La Grenouillère by Claude Monet, in its gilded frame at The Met" className={styles.still} />
      <figcaption><span>my favorite painting at the met</span>La Grenouillère, Claude Monet</figcaption>
    </figure>
  </article>;
}
