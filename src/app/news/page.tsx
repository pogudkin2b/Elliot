import { getAllEvents } from '@/lib/events'
import NewsPageClient from './NewsPageClient'

// Revalidate this page every 60 seconds
export const revalidate = 60

export default async function NewsPage() {
  const events = await getAllEvents()

  return <NewsPageClient events={events} />
}
