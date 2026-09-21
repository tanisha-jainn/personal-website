'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header({ belowHero = false }: { belowHero?: boolean }) {
  const pathname = usePathname();
  if (pathname === '/' && !belowHero) return null;
  return <header className={`site-header section-wrap${belowHero ? " below-intro-nav" : ""}`}><Link href="/" className="wordmark" aria-label="Tanisha Jain home">tanisha jain</Link><nav aria-label="Main navigation"><Link href="/portfolio" aria-current={pathname.startsWith('/portfolio') ? 'page' : undefined}>work</Link><Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>about</Link><Link href="/passions" aria-current={pathname === '/passions' ? 'page' : undefined}>just for joy</Link><a href="mailto:tj32@illinois.edu">say hello <span aria-hidden="true">↗</span></a></nav></header>;
}
