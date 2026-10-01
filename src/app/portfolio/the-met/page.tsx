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

const experiments = [
  { title: 'trend formats', body: 'Pieces modeled on what was going viral, like the “POV: you’re a teen in NYC” reel.' },
  { title: 'day in the life', body: 'Short videos following people around the museum, like a fellow intern in photograph conservation.' },
  { title: 'a weekly series', body: '“Join us on Friday” went out every week, so it had to be recognizable at a glance.' },
];

export default function MetCaseStudy() {
  return <article className={`${styles.page} ${figtree.className}`}>
    <Link className={styles.back} href="/#work">← all work</Link>

    <header className={`${styles.header} ${styles.centered}`}>
      <p className={styles.eyebrow}>the met · digital media intern (high school) · summer 2022</p>
      <h1>Making a museum feel like it’s for teens.</h1>
      <a className={styles.follow} href="https://www.instagram.com/metteens/" target="_blank" rel="noreferrer">
        <span>see it live</span>Met Teens on Instagram ↗
      </a>
      <p className={styles.dek}>
        This is where my marketing started. As a high school intern on The Met’s digital media team, I helped run
        Met Teens, the museum’s account for teenagers.
      </p>
    </header>
    <MediaCarousel slides={slides} label="Posts I worked on for Met Teens" />

    <section className={styles.split}>
      <h2>the goal</h2>
      <p className={styles.lede}>
        The Met holds centuries of history, and moments of pop culture like the Met Gala. Our job was to show teens
        where they fit in.
      </p>
    </section>

    <section className={styles.split}>
      <h2>a summer of experiments</h2>
      <div>
        <p>Not one kind of post, but content that felt current enough to sit in teens’ feeds next to everything else.</p>
        <ul className={styles.cards}>
          {experiments.map(({ title, body }) => <li key={title}><span>{title}</span>{body}</li>)}
        </ul>
        <p>
          Underneath it all was a design question: how do you make an institution this storied feel like it belongs
          to a younger audience? And with so many interns and staff, I learned to share ideas, and build on other
          people’s, in a big group.
        </p>
      </div>
    </section>

    <section className={styles.split}>
      <h2>what i took away</h2>
      <div>
        <p>Growing up loving art and history, this was a dream. It’s also what sparked my love for digital media.</p>
        <ol className={styles.takeaways}>
          <li><b>Know your audience, really well.</b>In marketing, product or engineering, keep the user top of mind.</li>
          <li><b>I do my best work when I’m engrossed in what I’m building.</b>Loving the art made me care about every post.</li>
        </ol>
      </div>
    </section>

    {/* A little sign-off: my favorite painting in the museum. */}
    <figure className={styles.signoff}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/the-met/fave-painting.jpg" alt="La Grenouillère by Claude Monet, hanging at The Met" className={styles.still} />
      <figcaption><span>my favorite painting at the met</span>La Grenouillère, Claude Monet</figcaption>
    </figure>
  </article>;
}
