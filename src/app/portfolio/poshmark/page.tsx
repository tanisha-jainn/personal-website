import Link from 'next/link';
import { Figtree } from 'next/font/google';
import CaseVideo from '../../components/CaseVideo';
import styles from './page.module.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'Poshmark: turning live listings into ads',
  description: 'A summer of experiments in automating parts of Poshmark’s video ad process to put more real, available product in front of shoppers.',
};

const v = (name: string) => ({ src: `/work/poshmark/${name}.mp4`, poster: `/work/poshmark/${name}.jpg` });

const stats = [
  ['50+', 'video ads made'],
  ['25+', 'deployed to campaigns'],
  ['1M+', 'viewers reached'],
  ['0.9% → 3%+', 'click-through rate'],
  ['5–7%', 'lower cost per acquisition'],
];

type Who = 'human' | 'ai-assisted' | 'automated' | 'manual';
const steps: { who: Who; title: string; body: string }[] = [
  { who: 'human', title: 'Find the audience and the idea',
    body: 'Who is this ad for, and what are they into right now: which brands, which materials, which moments? That became a short brief.' },
  { who: 'ai-assisted', title: 'Turn the brief into a script',
    body: 'Claude and ChatGPT helped draft the brief into a tight script I could edit.' },
  { who: 'automated', title: 'Pull real, available product',
    body: 'A Python script searched our live catalog: give it a brand, and it returned items currently for sale.' },
  { who: 'manual', title: 'Pick and clean the images',
    body: 'Choosing listings that look good in an ad, and cleaning them up, was still by hand. It’s the step most worth automating next.' },
  { who: 'ai-assisted', title: 'Voice it',
    body: 'ElevenLabs generated the voiceover from the script.' },
  { who: 'ai-assisted', title: 'Put it together',
    body: 'Canva for layout and edit. For the fully generated concepts, Midjourney made the visuals straight from the brief; I only added the in-app graphics by hand.' },
];
const whoLabel: Record<Who, string> = { human: 'me', 'ai-assisted': 'ai-assisted', automated: 'automated', manual: 'still manual' };

const work = [
  { ...v('finals/ai-ad'), title: 'fully generated', note: 'From brief to finished ad with Midjourney and ElevenLabs. The only hand-made parts are the in-app graphics.' },
  { ...v('finals/ai-influencer'), title: 'generated creator', note: 'For Posh Lens. Of the generated influencer ads I launched, this one performed best.' },
  { ...v('finals/what-she-poshed'), title: 'real listings', note: 'A trend format: what she wanted, then what she actually found on Poshmark.' },
  { ...v('finals/back-to-school'), title: 'real listings', note: 'A college day, styled entirely from the live catalog.' },
  { ...v('finals/fav-brands'), title: 'a brief for creators', note: 'Me on camera, as an example of the real-product videos we wanted our creators to make.' },
];

export default function PoshmarkCaseStudy() {
  return <article className={`${styles.page} ${figtree.className}`}>
    <Link className={styles.back} href="/#work">← all work</Link>

    <header className={styles.header}>
      <p className={styles.eyebrow}>poshmark · product intern · summer 2025</p>
      <h1>Turning live listings into ads, faster.</h1>
      <p className={styles.dek}>
        Poshmark’s best ads were the simplest: real, available items you could tap and buy. I spent the summer
        testing how much of making a video ad could be automated, so we could put more real product in front of
        shoppers, in more variety, every week.
      </p>
      <div className={styles.heroVideos}>
        <CaseVideo {...v('finals/ai-ad')} label="Fully AI-generated Poshmark ad" />
        <CaseVideo {...v('finals/what-she-poshed')} label="What she poshed ad, built from real listings" />
        <CaseVideo {...v('finals/ai-influencer')} label="AI-generated creator ad for Posh Lens" />
      </div>
      <dl className={styles.stats}>
        {stats.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </header>

    <section className={styles.section}>
      <h2>The insight</h2>
      <p>
        Video ads were made by hand, one at a time, and couldn’t keep up with a catalog that changes by the minute.
        Meanwhile, our best performers were Instagram square ads: Meta picks real, available listings, and photos
        of them, based on what you’ve liked and what we know about you, and shows them in a revolving grid.
      </p>
      <p className={styles.pull}>People click on the real thing they can buy.</p>
      <p>
        So the question became: how might we get more real product, in more variety, into our video ads, without
        making every one by hand?
      </p>
      <aside className={styles.note}>
        <span>a note on timing</span>
        This was summer 2025. Veo 3 had just come out and generated video was still rough around the edges. The
        goal was never to let AI make the ads. It was to find which steps really need a person, and automate the rest.
      </aside>
    </section>

    <section className={styles.section}>
      <h2>How an ad got made</h2>
      <ol className={styles.steps}>
        {steps.map(({ who, title, body }) => <li key={title} data-who={who}>
          <span className={styles.who}>{whoLabel[who]}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </li>)}
      </ol>
    </section>

    <section className={styles.section}>
      <h2>The work</h2>
      <p>A few favorites from the 50+ I made, mixing fully generated concepts with ones built from real listings.</p>
      <div className={styles.gallery}>
        {work.map(({ src, poster, title, note }) => <figure key={src}>
          <CaseVideo src={src} poster={poster} label={`${title}: ${note}`} />
          <figcaption><span>{title}</span>{note}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className={styles.section}>
      <h2>Behind the scenes</h2>
      <p>
        The back-to-school ad, mid-build: listings the catalog script pulled, laid out in Canva before any voiceover
        or captions went on top. And the finished ad beside it.
      </p>
      <div className={styles.process}>
        <figure>
          <CaseVideo {...v('iterations/in-progress')} shape="wide" label="Building the back-to-school ad in Canva" />
          <figcaption><span>in progress</span>Laying out real listings in Canva.</figcaption>
        </figure>
        <figure className={styles.final}>
          <CaseVideo {...v('finals/back-to-school')} label="The finished back-to-school ad" />
          <figcaption><span>final</span>With voiceover, captions and the end card.</figcaption>
        </figure>
      </div>
    </section>

    <section className={styles.section}>
      <h2>How we tested</h2>
      <ul className={styles.list}>
        <li>Five new ads went up every week, mixed in with our non-AI creative. The best performer stayed; the rest rotated out.</li>
        <li>Over 10+ weekly A/B experiments, click-through rose from 0.9% to over 3%, and cost per acquisition fell 5–7%.</li>
        <li>The winners were the concepts showing the actual clothes we sell. Among the generated creator ads, the Posh Lens one stood out.</li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2>What I took away</h2>
      <ul className={styles.list}>
        <li><b>Real product wins.</b> The ads people clicked were the ones showing things they could actually buy.</li>
        <li><b>The human part is the idea and the taste.</b> Knowing the audience, writing the brief, and choosing which images belong in an ad still needed a person.</li>
        <li><b>Speed changes what you can test.</b> Automating the rest made a weekly rotation of five new concepts realistic, and gave our creators concrete examples of what we were looking for.</li>
      </ul>
    </section>
  </article>;
}
