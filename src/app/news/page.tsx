import { getAllEvents } from '@/lib/events'
import NewsPageClient from './NewsPageClient'

export default async function NewsPage() {
  const events = await getAllEvents()

  return <NewsPageClient events={events} />
}
