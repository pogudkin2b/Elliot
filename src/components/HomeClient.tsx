'use client'

import { I18nProvider } from '@/lib/i18n'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import Gallery from '@/components/Gallery'
import Program from '@/components/Program'
import Nutrition from '@/components/Nutrition'
import Reviews from '@/components/Reviews'
import Pricing from '@/components/Pricing'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import NewsSection from '@/components/NewsSection'
import { EventSummary } from '@/lib/events'

interface HomeClientProps {
  events: EventSummary[]
}

export default function HomeClient({ events }: HomeClientProps) {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Advantages />
          <Gallery />
          <Program />
          <Nutrition />
          <NewsSection events={events} />
          <Reviews />
          <Pricing />
          <Contacts />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
