import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Let’s build something remarkable
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <input
            type="text"
            placeholder="Company / Project"
            className="md:col-span-2 w-full rounded-xl border border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <textarea
            required
            placeholder="What are we creating together?"
            rows={5}
            className="md:col-span-2 w-full rounded-xl border border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">I typically respond within 24 hours.</p>
            <button type="submit" className="rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 text-sm font-medium shadow hover:shadow-lg transition">Send inquiry</button>
          </div>
          {status && <p className="md:col-span-2 text-sm text-green-600 dark:text-green-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}
