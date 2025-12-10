import { notFound } from 'next/navigation'
import { getEventBySlug, getAllEventSlugs } from '@/lib/events'
import EventDetailClient from './EventDetailClient'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

// Revalidate this page every 60 seconds
export const revalidate = 60

// Allow dynamic params for new events
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return <EventDetailClient event={event} />
}
