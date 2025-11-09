import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Flames Designer. All rights reserved.</p>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">Available for select 2025 collaborations</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white dark:bg-neutral-950 selection:bg-indigo-200/60 selection:text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
