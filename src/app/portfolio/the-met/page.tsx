import Link from 'next/link';
import { Figtree } from 'next/font/google';
import MediaCarousel, { type Slide } from '../../components/MediaCarousel';
import styles from '../case.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'The Met: where my marketing started',
  description: 'Helping run Met Teens, The Met’s account for teenagers, as a high school digital media intern.',
};

const v = (name: string) => ({ src: `/work/the-met/${name}.mp4`, poster: `/work/the-met/${name}.jpg` });
const slides: Slide[] = [
  { ...v('teen-fridays-reel'), title: 'teen fridays', note: 'A trend-format reel with @metmuseum: “POV: you’re a teen in NYC with your friends.” 5,000+ likes.' },
  { ...v('post-scroll'), title: 'join us on friday', note: 'A recurring series we turned out every Friday, this one for the Science of Color career lab.' },
  { ...v('conservation-carousel'), title: 'a day in the life', note: 'Following a fellow high school intern in photograph conservation, cataloguing lantern slides.' },
  { ...v('art-carousel'), title: 'in the galleries', note: 'Sketchbook drawings side by side with the works that inspired them.' },
  { src: '/work/the-met/instagram-feed.jpg', title: 'the feed', note: 'How it all came together on @metteens.' },
  { src: '/work/the-met/interns.jpg', title: 'the team', note: 'The summer ’22 interns, signing off: “MET WHO?”' },
];

export default function MetCaseStudy() {
  return <article className={`${styles.page} ${figtree.className}`}>
    <Link className={styles.back} href="/#work">← all work</Link>

    <header className={styles.header}>
      <p className={styles.eyebrow}>the met · digital media intern (high school) · summer 2022</p>
      <h1>Making a museum feel like it’s for teens.</h1>
      <a className={styles.follow} href="https://www.instagram.com/metteens/" target="_blank" rel="noreferrer">
        <span>see it live</span>Met Teens on Instagram ↗
      </a>
      <p className={styles.dek}>
        This is where my marketing started. As a high school intern on The Met’s digital media team, I helped run
        Met Teens, the museum’s account for teenagers.
      </p>
      <MediaCarousel slides={slides} label="Posts I worked on for Met Teens" />
    </header>

    <section className={styles.section}>
      <h2>The goal</h2>
      <p>
        The Met is a place rich with history, and also with pop culture, from the art on its walls to the Met Gala.
        Our job was to show teenagers where they fit into all of it.
      </p>
    </section>

    <section className={styles.section}>
      <h2>A summer of experiments</h2>
      <p>
        The challenge wasn’t making one kind of post. It was making content that felt current, so the museum showed
        up in teens’ feeds alongside everything else they were watching:
      </p>
      <ul className={styles.list}>
        <li><b>Trend formats,</b> modeled on what was going viral at the time, like the “POV: you’re a teen in NYC” Teen Fridays reel.</li>
        <li><b>Short-form video and day-in-the-life content,</b> like following a fellow intern through photograph conservation.</li>
        <li><b>A recurring series.</b> “Join us on Friday” went out every week, so it had to be recognizable at a glance.</li>
      </ul>
      <p>
        Underneath all of it was a design question: how do you market an institution as storied as The Met so it
        feels like it belongs to a younger audience? And working alongside so many other interns and staff, I learned
        how to share ideas, and build on other people’s, in a big group.
      </p>
    </section>

    <section className={styles.section}>
      <h2>What I took away</h2>
      <p>
        As someone who grew up loving art and history, this was a dream. It’s also what sparked my love for digital
        media, and for figuring out what it can do.
      </p>
      <ul className={styles.list}>
        <li><b>Know your audience, really well.</b> It’s the most fundamental thing I’ve learned in marketing, and it holds in product and engineering too: keep the user top of mind.</li>
        <li><b>I do my best work when I’m engrossed in what I’m building.</b> Loving the art made me care about every post.</li>
      </ul>
    </section>

    {/* A little sign-off: my favorite painting in the museum, already in its own gilded frame. */}
    <figure className={styles.signoff}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/the-met/fave-painting-cropped.jpg" alt="La Grenouillère by Claude Monet, in its gilded frame at The Met" className={styles.framed} />
      <figcaption><span>my favorite painting at the met</span>La Grenouillère, Claude Monet</figcaption>
    </figure>
  </article>;
}
