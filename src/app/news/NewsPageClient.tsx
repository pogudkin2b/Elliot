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
        return 'bg-pink-100 text-pink-700'
      case 'event':
        return 'bg-blue-100 text-blue-700'
      case 'announcement':
        return 'bg-amber-100 text-amber-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              {t.news.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <p className="text-lg text-gray-500">{t.news.noEvents}</p>
              <Link
                href="/"
                className="mt-6 inline-block text-pink-600 hover:text-pink-700 font-medium"
              >
                {t.news.backToNews}
              </Link>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                >
                  <Link
                    href={`/news/${event.slug}`}
                    className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {event.coverImage && (
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={urlFor(event.coverImage).width(600).height(400).url()}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-sm text-gray-500">
                          {formatDate(event.date)}
                        </time>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${getTypeBadgeColor(
                            event.type
                          )}`}
                        >
                          {t.news.types[event.type]}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                        {event.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3">
                        {event.shortDescription}
                      </p>
                      <div className="mt-4 text-pink-600 font-medium group-hover:translate-x-2 inline-block transition-transform">
                        {t.news.readMore} →
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
