'use client';
import { useState } from 'react';
import Link from 'next/link';
import { projects, type Category } from '../data/projects';
import ProjectVisual from './ProjectVisual';

export default function ProjectGrid({ initialFilter = 'All' }: { initialFilter?: Category | 'All' }) {
  const [filter, setFilter] = useState<Category | 'All'>(initialFilter);
  const visible = projects.filter(project => filter === 'All' || project.categories.includes(filter));
  return <section id="work" className="work-section section-wrap">
    <div className="section-heading"><div><h2>My work.</h2></div></div>
    <div className="filters" role="group" aria-label="Filter projects">{(['All', 'Product', 'Marketing', 'Engineering', 'Leadership'] as const).map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category === 'All' ? 'All work' : category}<span>{category === 'All' ? projects.length : projects.filter(p => p.categories.includes(category)).length}</span></button>)}</div>
    <p className="sr-only" role="status">Showing {visible.length} {filter === 'All' ? '' : filter.toLowerCase()} projects</p>
    <div className="project-grid">{visible.map(project => <Link className="project-card" key={project.slug} href={`/portfolio/${project.slug}`}><ProjectVisual project={project}/><div className="project-meta">{project.organization}<span aria-hidden="true">↗</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="category-tags">{project.categories.map(category => <span key={category}>{category}</span>)}</div></Link>)}</div>
  </section>;
}
