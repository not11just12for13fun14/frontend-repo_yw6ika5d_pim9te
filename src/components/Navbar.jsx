import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur bg-white/60 dark:bg-neutral-900/50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="w-5 h-5 text-indigo-600" />
          <span className="text-neutral-900 dark:text-white">Flames • Designer</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow"
          >
            <Mail className="w-4 h-4" />
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
}
