'use client'

import { motion } from 'framer-motion'
import { useI18n, I18nProvider } from '@/lib/i18n'
import Link from 'next/link'
import { EventSummary } from '@/lib/events'
import { urlFor } from '@/sanity/lib/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface NewsPageClientProps {
  events: EventSummary[]
}

function NewsPageContent({ events }: NewsPageClientProps) {
  const { t } = useI18n()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'holiday':
        return 'bg-terracotta/20 text-terracotta-dark'
      case 'event':
        return 'bg-sage/20 text-sage-dark'
      case 'announcement':
        return 'bg-clay/20 text-clay'
      default:
        return 'bg-sand text-warm-gray'
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-24 md:py-32 bg-sand relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-cream rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-sage-lighter/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4"
            >
              Latest updates
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6">
              {t.news.title}
            </h1>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
              {t.news.subtitle}
            </p>
          </motion.div>

          {events.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-warm-gray">{t.news.noEvents}</p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium"
              >
                ← {t.news.backToNews}
              </Link>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.08, 0.5),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link
                    href={`/news/${event.slug}`}
                    className="group block h-full bg-cream rounded-3xl overflow-hidden border border-sand hover:shadow-soft-lg transition-all duration-300"
                  >
                    {event.coverImage && (
                      <div className="relative h-48 overflow-hidden bg-sand">
                        <img
                          src={urlFor(event.coverImage).width(600).height(400).url()}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Warm overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-terracotta/10 via-transparent to-sage/10" />
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <time className="text-sm text-warm-gray">
                          {formatDate(event.date)}
                        </time>
                        <span
                          className={`text-xs font-medium px-3 py-1.5 rounded-full ${getTypeBadgeColor(
                            event.type
                          )}`}
                        >
                          {t.news.types[event.type]}
                        </span>
                      </div>
                      <h2 className="font-display text-xl md:text-2xl text-charcoal mb-3 leading-tight group-hover:text-terracotta transition-colors">
                        {event.title}
                      </h2>
                      <p className="text-warm-gray text-sm md:text-base leading-relaxed line-clamp-3">
                        {event.shortDescription}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-terracotta font-medium group-hover:gap-3 transition-all">
                        {t.news.readMore}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function NewsPageClient({ events }: NewsPageClientProps) {
  return (
    <I18nProvider>
      <NewsPageContent events={events} />
    </I18nProvider>
  )
}
