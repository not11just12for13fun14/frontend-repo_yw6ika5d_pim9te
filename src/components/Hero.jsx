import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-neutral-950/80 dark:via-neutral-950/20 dark:to-neutral-950" />

      <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300"
        >
          Product Designer crafting modern, playful, interactive brands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-neutral-700 dark:text-neutral-300"
        >
          I blend motion, 3D, and crisp UI to build memorable digital experiences.
          Scroll to explore selected work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <a href="#work" className="rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition">View projects</a>
          <a href="#about" className="rounded-full border border-neutral-300/70 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">About me</a>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  return (
    <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center">
      <div className="animate-bounce text-neutral-500 dark:text-neutral-400 text-xs tracking-wider uppercase">Scroll</div>
    </div>
  );
}
