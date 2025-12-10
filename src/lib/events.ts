import { fetchSanity } from './sanityClient'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { PortableTextBlock } from '@portabletext/types'

export type EventSummary = {
  title: string
  title_ru?: string
  title_ka?: string
  slug: string
  date: string
  type: 'holiday' | 'event' | 'announcement'
  shortDescription: string
  shortDescription_ru?: string
  shortDescription_ka?: string
  coverImage?: SanityImageSource
  pinned?: boolean
}

export type EventDetail = EventSummary & {
  body?: PortableTextBlock[]
  body_ru?: PortableTextBlock[]
  body_ka?: PortableTextBlock[]
  gallery?: SanityImageSource[]
}

/**
 * Get latest events for homepage, with pinned events first
 */
export async function getEventsForHomepage(limit = 3): Promise<EventSummary[]> {
  const query = `*[_type == "event"] | order(pinned desc, date desc)[0...$limit]{
    title,
    title_ru,
    title_ka,
    "slug": slug.current,
    date,
    type,
    shortDescription,
    shortDescription_ru,
    shortDescription_ka,
    coverImage,
    pinned
  }`

  return fetchSanity<EventSummary[]>(query, { limit: limit - 1 })
}

/**
 * Get all events ordered by date descending
 */
export async function getAllEvents(): Promise<EventSummary[]> {
  const query = `*[_type == "event"] | order(date desc){
    title,
    title_ru,
    title_ka,
    "slug": slug.current,
    date,
    type,
    shortDescription,
    shortDescription_ru,
    shortDescription_ka,
    coverImage,
    pinned
  }`

  return fetchSanity<EventSummary[]>(query)
}

/**
 * Get a single event by slug
 */
export async function getEventBySlug(slug: string): Promise<EventDetail | null> {
  const query = `*[_type == "event" && slug.current == $slug][0]{
    title,
    title_ru,
    title_ka,
    "slug": slug.current,
    date,
    type,
    shortDescription,
    shortDescription_ru,
    shortDescription_ka,
    coverImage,
    pinned,
    body,
    body_ru,
    body_ka,
    gallery
  }`

  return fetchSanity<EventDetail | null>(query, { slug })
}

/**
 * Get all event slugs (for static generation)
 */
export async function getAllEventSlugs(): Promise<string[]> {
  const query = `*[_type == "event"]{"slug": slug.current}.slug`
  return fetchSanity<string[]>(query)
}
