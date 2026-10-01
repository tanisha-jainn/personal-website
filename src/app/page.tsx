import Link from 'next/link';
import ProjectGrid from './components/ProjectGrid';
import Header from './header';
import ScrollStatement from './components/ScrollStatement';
import ScrollReveal from './components/ScrollReveal';
import StitchedHero from './components/StitchedHero';

export default function Home() {
  return <>
    <StitchedHero />
    <ScrollStatement />
    <ScrollReveal>
    <section className="intro-strip section-wrap"><p>Stitching my life<br/>together.</p><div>I’m a Computer Science and Linguistics student at the University of Illinois Urbana-Champaign. I’m stitching together my experience in product, marketing, and engineering: understanding a problem, telling its story, and building a solution.<Link href="/about">More about me ↗</Link></div></section>
    </ScrollReveal>
    <a className="guide-arrow statement-arrow section-wrap" href="#work" aria-label="Continue to projects">↓</a>
    <Header belowHero />
    <ProjectGrid/>
    <section className="personal-strip section-wrap"><div><h2>The personal threads.</h2><p>Embroidery, cooking, and The Kitchen Diaries.</p></div><Link href="/passions">Take a look ↗</Link></section>
  </>;
}
