import './globals.css';
import Footer from './footer';
import Header from './header';
export const metadata = {
  title: { default: 'Tanisha Jain — Product, Code & Curiosity', template: '%s | Tanisha Jain' },
  description: 'Computer science, linguistics, and thoughtful products. Explore Tanisha Jain’s projects, experiments, and the thinking behind them.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></body></html>;
}
