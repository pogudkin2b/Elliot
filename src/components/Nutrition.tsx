'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import WeeklyMenu from '@/components/WeeklyMenu';

export default function Nutrition() {
  const { t } = useI18n();

  const mealTimes = [
    { time: '09:00', meal: 'Breakfast', icon: '🥣' },
    { time: '10:30', meal: 'Snack', icon: '🍎' },
    { time: '13:00', meal: 'Lunch', icon: '🍽️' },
    { time: '15:30', meal: 'Snack', icon: '🥛' },
    { time: '17:00', meal: 'Light dinner', icon: '🥗' },
  ];

  return (
    <section id="nutrition" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gray to-transparent" />
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-peach/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-sage/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Верхняя секция - описание */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image & Meal Times */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=600&fit=crop"
                alt="Healthy food"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            </div>

            {/* Meal times overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-cream rounded-3xl shadow-soft-lg p-6 max-w-xs border border-sand"
            >
              <h4 className="font-display text-xl text-charcoal mb-4">4-5 meals daily</h4>
              <div className="space-y-2">
                {mealTimes.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-warm-gray w-12">{item.time}</span>
                    <span className="text-charcoal">{item.meal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Nutrition
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              {t.nutrition.title}
            </h2>
            <p className="text-xl text-sage font-medium mb-4">
              {t.nutrition.subtitle}
            </p>
            <p className="text-warm-gray mb-8 text-lg leading-relaxed">
              {t.nutrition.description}
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-sand rounded-2xl p-5">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-charcoal font-medium">{t.nutrition.menuUpdate}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Нижняя секция - интерактивное меню */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl text-charcoal mb-3">
              Недельное меню
            </h3>
            <p className="text-warm-gray text-lg">
              Выберите день недели, чтобы посмотреть подробное меню
            </p>
          </div>
          <WeeklyMenu />
        </motion.div>
      </div>
    </section>
  );
}
