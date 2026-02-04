import React from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import BottomNavigation from '../components/layout/BottomNavigation'
import CornerDecorators from '../components/ui/CornerDecorators'
import ContactHeader from '../components/contact/ContactHeader'
import ArchitectsProfile from '../components/contact/ArchitectsProfile'
import ContactLinks from '../components/contact/ContactLinks'
import LocationCard from '../components/contact/LocationCard'

function Contacto() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
      <CosmicBackground />
      <CornerDecorators />
      
      <ContactHeader />

      <main className="relative z-10 flex-1 overflow-y-auto px-6 pb-24">
        <ArchitectsProfile />
        <ContactLinks />
        <LocationCard />

        <div className="mt-8 flex flex-col items-center gap-4 mb-8">
          <div className="w-px h-12 bg-linear-to-b from-primary/60 to-transparent"></div>
          <p className="text-[10px] text-slate-600 tracking-[0.4em] uppercase">Est. MMXXIV</p>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}

export default Contacto
