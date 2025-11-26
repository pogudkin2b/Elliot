'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
      <div className="absolute -right-32 bottom-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />

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
            Investment
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-sand rounded-4xl shadow-soft-lg overflow-hidden border border-sand">
            {/* Price header */}
            <div className="bg-gradient-to-r from-sage to-sage-dark px-8 py-12 text-center text-cream relative overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cream/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="text-lg font-medium opacity-90 mb-2">Monthly fee</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-display text-6xl md:text-7xl">{t.pricing.price}</span>
                  <span className="text-2xl opacity-90">{t.pricing.currency}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-8 md:p-12 bg-cream">
              <h3 className="font-display text-2xl text-charcoal mb-6">
                {t.pricing.included.title}
              </h3>

              <ul className="space-y-4 mb-8">
                {t.pricing.included.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Note */}
              <div className="bg-peach/30 border border-peach rounded-2xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-terracotta-dark text-sm">{t.pricing.note}</p>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contacts"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center px-8 py-4 bg-charcoal hover:bg-charcoal/90 text-cream font-semibold rounded-full transition-colors shadow-soft-lg"
              >
                {t.hero.cta}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
