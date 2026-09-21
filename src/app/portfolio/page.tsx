import ProjectGrid from '../components/ProjectGrid';
import type { Category } from '../data/projects';
export const metadata = { title: 'Selected work' };
export default function Portfolio({ searchParams }: { searchParams: { category?: string } }) {
  const categories: Category[] = ['Product', 'Marketing', 'Engineering', 'Leadership'];
  const filter = categories.find(category => category === searchParams.category) ?? 'All';
  return <div className="portfolio-page"><div className="page-intro section-wrap"><span className="eyebrow">THE PORTFOLIO</span><h1>Different threads.<br/><em>Connected work.</em></h1><p>My experience across product, marketing, and engineering, with the people and decisions that connect them.</p></div><ProjectGrid key={filter} initialFilter={filter}/></div>;
}
