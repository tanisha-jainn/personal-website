import Link from 'next/link';
import Header from './header';
import StitchedHero from './components/StitchedHero';
import StitchedIntro from './components/StitchedIntro';
import WorkSection from './components/WorkSection';

export default function Home() {
  return <>
    <StitchedHero />
    <StitchedIntro />
    <Header belowHero />
    <WorkSection />
    <section className="personal-strip section-wrap"><div><h2>The personal threads.</h2><p>Embroidery, cooking, and The Kitchen Diaries.</p></div><Link href="/passions">Take a look ↗</Link></section>
  </>;
}
