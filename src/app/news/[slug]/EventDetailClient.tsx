'use client'

import { motion } from 'framer-motion'
import { useI18n, I18nProvider } from '@/lib/i18n'
import Link from 'next/link'
import { EventDetail } from '@/lib/events'
import { urlFor } from '@/sanity/lib/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PortableText } from '@portabletext/react'

interface EventDetailClientProps {
  event: EventDetail
}

function EventDetailContent({ event }: EventDetailClientProps) {
  const { t } = useI18n()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
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
      <main className="py-12 bg-white">
        <article className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mb-8"
            >
              ← {t.news.backToNews}
            </Link>

            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <time className="text-gray-600">{formatDate(event.date)}</time>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${getTypeBadgeColor(
                    event.type
                  )}`}
                >
                  {t.news.types[event.type]}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {event.shortDescription}
              </p>
            </div>

            {event.coverImage && (
              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={urlFor(event.coverImage).width(1200).height(800).url()}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {event.body && (
              <motion.div
                className="prose prose-lg max-w-none mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <PortableText
                  value={event.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                          {children}
                        </h3>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-gray-700">{children}</em>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-2">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-2">
                          {children}
                        </ol>
                      ),
                    },
                  }}
                />
              </motion.div>
            )}

            {event.gallery && event.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gallery
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {event.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-xl overflow-hidden bg-gray-100"
                    >
                      <img
                        src={urlFor(image).width(600).height(400).url()}
                        alt={`${event.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/news"
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors"
              >
                ← {t.news.backToNews}
              </Link>
            </motion.div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  return (
    <I18nProvider>
      <EventDetailContent event={event} />
    </I18nProvider>
  )
}
