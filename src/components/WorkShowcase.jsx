import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Nova—AI Research Lab',
    description: 'Brand system, 3D landing, and product UI for a next‑gen AI startup.',
    tags: ['Brand', 'Web', '3D'],
    cover: 'https://images.unsplash.com/photo-1520975682031-a6a6944a65c3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse—Wellness App',
    description: 'Mobile design with playful motion and adaptive themes.',
    tags: ['Mobile', 'Motion'],
    cover: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Forge—Developer Tools',
    description: 'Design system and documentation with progressive disclosure.',
    tags: ['Design System', 'Docs'],
    cover: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative py-24 md:py-36 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 md:mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">A snapshot of recent projects across brand, product, and motion.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-neutral-300/70 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Start a project</a>
        </div>

        <div className="space-y-12">
          {projects.map((p, idx) => (
            <ProjectRow key={idx} project={p} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[16/10]">
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">{t}</span>
          ))}
        </div>
        <a href="#contact" className="mt-6 inline-block text-sm font-medium text-indigo-600 hover:underline">Case study →</a>
      </div>
    </motion.div>
  );
}
