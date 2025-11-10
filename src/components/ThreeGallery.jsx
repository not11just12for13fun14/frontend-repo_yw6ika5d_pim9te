import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const scenes = [
  {
    title: 'Playful Interaction',
    caption: 'Lightweight 3D micro‑interactions for product delight.',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
  },
  {
    title: 'Tech Aesthetic',
    caption: 'Clean geometry and polished lighting for modern brands.',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
  },
  {
    title: 'Immersive Moments',
    caption: 'Hero moments that stay performant across devices.',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
  },
];

export default function ThreeGallery() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 md:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">3D Explorations</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">Interactive models optimized for mobile and desktop.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scenes.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, caption, scene }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950"
    >
      <div className="relative aspect-[4/3]">
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />
      </div>
      <div className="p-5">
        <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{caption}</p>
      </div>
    </motion.article>
  );
}
