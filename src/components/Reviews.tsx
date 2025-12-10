'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Reviews() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = t.reviews.items;

  return (
    <section id="reviews" className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cream rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-sage/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            {t.reviews.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main review card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-cream rounded-3xl p-8 md:p-12 relative shadow-soft-lg border border-sand"
            >
              {/* Quote icon */}
              <div className="absolute top-8 left-8 text-sage/30">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10 pt-12">
                <p className="text-xl md:text-2xl text-charcoal mb-8 leading-relaxed font-light">
                  &ldquo;{reviews[activeIndex].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center text-cream font-bold text-xl">
                    {reviews[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-lg text-charcoal">
                      {reviews[activeIndex].author}
                    </div>
                    <div className="text-warm-gray">
                      {reviews[activeIndex].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="absolute top-8 right-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-clay" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-8 h-3 flex items-center justify-center flex-shrink-0"
              >
                <span
                  className={`h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-terracotta w-8'
                      : 'bg-light-gray hover:bg-warm-gray w-3'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Navigation arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : reviews.length - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-cream rounded-full shadow-soft-lg flex items-center justify-center hover:bg-sand transition-colors border border-sand"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveIndex(activeIndex < reviews.length - 1 ? activeIndex + 1 : 0)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-cream rounded-full shadow-soft-lg flex items-center justify-center hover:bg-sand transition-colors border border-sand"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
