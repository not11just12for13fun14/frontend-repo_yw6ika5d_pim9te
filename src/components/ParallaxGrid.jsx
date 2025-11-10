import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527443224154-c4e83b598b66?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551281044-8af0d0903dfb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510519142254-9fbb53f19b89?q=80&w=1600&auto=format&fit=crop',
];

export default function ParallaxGrid() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-10 md:mb-14">Responsive Showcase</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {images.map((src, i) => (
            <motion.div key={src} style={{ y: i % 2 ? y2 : y1 }} className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
              <img src={src} alt="grid" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
