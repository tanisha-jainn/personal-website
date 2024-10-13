import './globals.css';
import About from './components/About';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 p-4">
        <About />
      </main>
    </div>
  );
}
