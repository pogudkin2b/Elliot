'use client';

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useRef } from 'react';

const icons = {
  bilingual: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
  yard: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  adaptation: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  schedule: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  themes: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  reports: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  meals: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  community: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const advantageKeys = ['bilingual', 'yard', 'adaptation', 'schedule', 'themes', 'reports', 'meals', 'community'] as const;

const cardStyles = [
  { bg: 'bg-sage/10', iconBg: 'bg-sage', text: 'text-sage-dark' },
  { bg: 'bg-clay/10', iconBg: 'bg-clay', text: 'text-clay' },
  { bg: 'bg-terracotta/10', iconBg: 'bg-terracotta', text: 'text-terracotta-dark' },
  { bg: 'bg-peach/30', iconBg: 'bg-peach', text: 'text-terracotta' },
  { bg: 'bg-sage-light/30', iconBg: 'bg-sage-light', text: 'text-sage-dark' },
  { bg: 'bg-terracotta-light/20', iconBg: 'bg-terracotta-light', text: 'text-terracotta-dark' },
  { bg: 'bg-clay/10', iconBg: 'bg-clay', text: 'text-clay' },
  { bg: 'bg-sage/10', iconBg: 'bg-sage', text: 'text-sage-dark' },
];

export default function Advantages() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="advantages" className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cream rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sage-lighter/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4"
          >
            Why choose us
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            {t.advantages.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
            {t.advantages.subtitle}
          </p>
        </motion.div>

        {/* Bento-style Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {advantageKeys.map((key, index) => {
            const style = cardStyles[index];
            const isLarge = index === 0 || index === 5;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`
                  group relative p-6 md:p-8 rounded-3xl bg-cream border border-sand
                  hover:shadow-soft-lg transition-all duration-300 cursor-pointer
                  ${isLarge ? 'col-span-2 md:col-span-2' : 'col-span-1'}
                `}
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 ${style.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 ${style.iconBg} rounded-2xl flex items-center justify-center mb-5 text-cream shadow-soft`}
                  >
                    {icons[key]}
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3 leading-tight">
                    {t.advantages.items[key].title}
                  </h3>
                  <p className="text-warm-gray text-sm md:text-base leading-relaxed">
                    {t.advantages.items[key].description}
                  </p>

                  {/* Arrow indicator on hover */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-cream rounded-full border border-light-gray">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-cream text-xs">8</div>
            </div>
            <span className="text-warm-gray text-sm">advantages for your child</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
