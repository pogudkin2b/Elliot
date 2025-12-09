import { fetchSanity } from './sanityClient'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { PortableTextBlock } from '@portabletext/types'

export type EventSummary = {
  title: string
  slug: string
  date: string
  type: 'holiday' | 'event' | 'announcement'
  shortDescription: string
  coverImage?: SanityImageSource
  pinned?: boolean
}

export type EventDetail = EventSummary & {
  body?: PortableTextBlock[]
  gallery?: SanityImageSource[]
}

/**
 * Get latest events for homepage, with pinned events first
 */
export async function getEventsForHomepage(limit = 3): Promise<EventSummary[]> {
  const query = `*[_type == "event"] | order(pinned desc, date desc)[0...$limit]{
    title,
    "slug": slug.current,
    date,
    type,
    shortDescription,
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
    "slug": slug.current,
    date,
    type,
    shortDescription,
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
    "slug": slug.current,
    date,
    type,
    shortDescription,
    coverImage,
    pinned,
    body,
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
