import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Actions + mobile toggle */}
        <div className="flex items-center gap-1 md:gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow"
          >
            <Mail className="w-4 h-4" />
            Hire me
          </a>
          <button
            aria-label="Toggle menu"
            className="inline-flex md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6 text-neutral-800 dark:text-neutral-200" /> : <Menu className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden mx-4 mb-3 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2">
          <a onClick={() => setOpen(false)} href="#work" className="block rounded-xl px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70">
            Work
          </a>
          <a onClick={() => setOpen(false)} href="#about" className="block rounded-xl px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="block rounded-xl px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70">
            Contact
          </a>
          <div className="flex items-center gap-2 px-2 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-3 text-sm font-medium shadow hover:shadow-md transition-shadow"
            >
              <Mail className="w-4 h-4" /> Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
