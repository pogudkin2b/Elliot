import type { EventSummary, EventDetail } from './events'
import type { Locale } from './i18n'
import type { PortableTextBlock } from '@portabletext/types'

/**
 * Pick the localized title for an event based on the current locale.
 * Falls back to other languages if the requested language is not available.
 */
export function pickLocalizedTitle(
  event: EventSummary | EventDetail,
  locale: Locale
): string {
  if (locale === 'ru') {
    return event.title_ru || event.title || event.title_ka || ''
  }
  if (locale === 'ka') {
    return event.title_ka || event.title || event.title_ru || ''
  }
  // Default to English
  return event.title || event.title_ka || event.title_ru || ''
}

/**
 * Pick the localized short description for an event based on the current locale.
 * Falls back to other languages if the requested language is not available.
 */
export function pickLocalizedShortDescription(
  event: EventSummary | EventDetail,
  locale: Locale
): string {
  if (locale === 'ru') {
    return (
      event.shortDescription_ru ||
      event.shortDescription ||
      event.shortDescription_ka ||
      ''
    )
  }
  if (locale === 'ka') {
    return (
      event.shortDescription_ka ||
      event.shortDescription ||
      event.shortDescription_ru ||
      ''
    )
  }
  // Default to English
  return (
    event.shortDescription ||
    event.shortDescription_ka ||
    event.shortDescription_ru ||
    ''
  )
}

/**
 * Pick the localized body content for an event based on the current locale.
 * Falls back to other languages if the requested language is not available.
 */
export function pickLocalizedBody(
  event: EventDetail,
  locale: Locale
): PortableTextBlock[] {
  if (locale === 'ru') {
    return event.body_ru || event.body || event.body_ka || []
  }
  if (locale === 'ka') {
    return event.body_ka || event.body || event.body_ru || []
  }
  // Default to English
  return event.body || event.body_ka || event.body_ru || []
}
