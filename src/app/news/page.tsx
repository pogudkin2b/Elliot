import Link from 'next/link'
import { getAllEvents } from '@/lib/events'
import { urlFor } from '@/sanity/lib/image'
import NewsPageClient from './NewsPageClient'

export default async function NewsPage() {
  const events = await getAllEvents()

  return <NewsPageClient events={events} />
}
