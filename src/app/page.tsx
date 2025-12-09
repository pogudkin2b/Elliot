import HomeClient from '@/components/HomeClient'
import { getEventsForHomepage } from '@/lib/events'

export default async function Home() {
  const events = await getEventsForHomepage(3)

  return <HomeClient events={events} />
}
