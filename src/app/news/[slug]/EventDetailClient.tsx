'use client'

import { motion } from 'framer-motion'
import { useI18n, I18nProvider } from '@/lib/i18n'
import Link from 'next/link'
import { EventDetail } from '@/lib/events'
import { urlFor } from '@/sanity/lib/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PortableText } from '@portabletext/react'
import {
  pickLocalizedTitle,
  pickLocalizedShortDescription,
  pickLocalizedBody,
} from '@/lib/i18nEvents'

interface EventDetailClientProps {
  event: EventDetail
}

function EventDetailContent({ event }: EventDetailClientProps) {
  const { t, locale } = useI18n()

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
      <main className="py-12 md:py-24 bg-sand relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-cream rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-sage-lighter/30 rounded-full blur-3xl" />
        </div>

        <article className="max-w-4xl mx-auto px-6 sm:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium mb-8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.news.backToNews}
            </Link>

            <div className="mb-8 bg-cream rounded-3xl p-8 md:p-10 border border-sand shadow-soft">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <time className="text-warm-gray font-medium">{formatDate(event.date)}</time>
                <span
                  className={`text-sm font-medium px-4 py-2 rounded-full ${getTypeBadgeColor(
                    event.type
                  )}`}
                >
                  {t.news.types[event.type]}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                {pickLocalizedTitle(event, locale)}
              </h1>
              <p className="text-xl text-warm-gray leading-relaxed">
                {pickLocalizedShortDescription(event, locale)}
              </p>
            </div>

            {event.coverImage && (
              <motion.div
                className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-sand border border-sand shadow-soft-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={urlFor(event.coverImage).width(1200).height(800).url()}
                  alt={pickLocalizedTitle(event, locale)}
                  className="w-full h-full object-cover"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta/10 via-transparent to-sage/10" />
              </motion.div>
            )}

            {pickLocalizedBody(event, locale).length > 0 && (
              <motion.div
                className="bg-cream rounded-3xl p-8 md:p-10 mb-12 border border-sand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <PortableText
                  value={pickLocalizedBody(event, locale)}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-warm-gray text-lg leading-relaxed mb-6">
                          {children}
                        </p>
                      ),
                      h2: ({ children }) => (
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-10 mb-6 first:mt-0">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="font-display text-2xl md:text-3xl text-charcoal mt-8 mb-4">
                          {children}
                        </h3>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold text-charcoal">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-warm-gray">{children}</em>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc list-inside mb-6 space-y-3 text-warm-gray">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal list-inside mb-6 space-y-3 text-warm-gray">
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
                <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">
                  Gallery
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {event.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-3xl overflow-hidden bg-sand border border-sand hover:shadow-soft-lg transition-all duration-300 group"
                    >
                      <img
                        src={urlFor(image).width(600).height(400).url()}
                        alt={`${pickLocalizedTitle(event, locale)} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Warm overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-terracotta/10 via-transparent to-sage/10" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              className="mt-12 pt-8 border-t border-sand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/news"
                className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal hover:bg-charcoal/90 text-cream font-semibold rounded-full transition-all shadow-soft-lg hover:shadow-soft-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t.news.backToNews}
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
