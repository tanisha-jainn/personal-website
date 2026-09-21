import Image from 'next/image';
import Link from 'next/link';
import ProjectGrid from './components/ProjectGrid';
import Header from './header';
import ScrollStatement from './components/ScrollStatement';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return <>
    <section className="hero section-wrap needlepoint-hero">
      <h1 className="embroidered-name supplied-name"><Image src="/art/tanisha-name-lace.png" alt="Tanisha Jain" width={1920} height={1080} unoptimized priority /></h1>
      <div className="hero-folders">
        <Link href="/portfolio?category=Product" className="folder-link"><span className="folder" aria-hidden="true"><span className="folder-sheet">ideas &<br/>decisions</span><span className="folder-front"/></span><span>product</span></Link>
        <Link href="/portfolio?category=Marketing" className="folder-link"><span className="folder" aria-hidden="true"><span className="folder-sheet">stories &<br/>audiences</span><span className="folder-front"/></span><span>marketing</span></Link>
        <Link href="/portfolio?category=Engineering" className="folder-link"><span className="folder" aria-hidden="true"><span className="folder-sheet">systems &<br/>experiments</span><span className="folder-front"/></span><span>engineering</span></Link>
      </div>
      <a className="guide-arrow hero-arrow" href="#stitched-statement" aria-label="Continue to the next section">↓</a>
    </section>
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
