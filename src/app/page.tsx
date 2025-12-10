import HomeClient from '@/components/HomeClient'
import { getEventsForHomepage } from '@/lib/events'

// Revalidate this page every 60 seconds
export const revalidate = 60

export default async function Home() {
  const events = await getEventsForHomepage(3)

  return <HomeClient events={events} />
}
