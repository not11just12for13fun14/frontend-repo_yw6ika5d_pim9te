import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Designer with a systems mindset</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I combine brand, product, and motion to shape cohesive experiences. My process emphasizes
            clarity, prototyping, and collaborative iteration. I enjoy crafting expressive visuals that
            remain grounded in usability and business outcomes.
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Tools I love: Figma, After Effects, Spline, Cinema 4D, and code-driven motion.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {[
            'Art direction & visual identity',
            'Product design & design systems',
            '3D & motion for web',
            'Prototyping & front‑end collaboration',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              <span className="text-neutral-800 dark:text-neutral-200 text-sm">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
