import Link from 'next/link';
export default function Footer() {
  return <footer className="site-footer section-wrap"><div className="footer-top"><div><h2>Let’s keep in touch.</h2></div><a className="hello-link" href="mailto:tj32@illinois.edu">Say hello ↗</a></div><div className="footer-bottom"><p>Tanisha Jain</p><div><a href="https://linkedin.com/in/jainntanisha" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/tanisha-jainn" target="_blank" rel="noreferrer">GitHub ↗</a><Link href="/coursework">Coursework</Link></div></div></footer>;
}
