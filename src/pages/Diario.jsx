import React, { useMemo } from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import MoonPhaseWidget from '../components/journal/MoonPhaseWidget'
import WeekCalendar from '../components/journal/WeekCalendar'
import FavoriteReadingsCarousel from '../components/journal/FavoriteReadingsCarousel'
import JournalEntryList from '../components/journal/JournalEntryList'
import FloatingActionButton from '../components/journal/FloatingActionButton'
import useCalendar from '../hooks/useCalendar'
import useMoonPhase from '../hooks/useMoonPhase'

function Diario() {
  // Memoizar la URL para evitar re-renders innecesarios
  const calendarUrl = useMemo(() => {
    const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
    
    // Si no hay credenciales, retornar null para usar datos locales
    if (!calendarId || !apiKey) {
      return null
    }

    const timeMin = new Date().toISOString()
    const timeMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()

    return `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarId
    )}/events?key=${apiKey}&singleEvents=true&orderBy=startTime&timeMin=${encodeURIComponent(
      timeMin
    )}&timeMax=${encodeURIComponent(timeMax)}`
  }, []) // Solo calcular una vez al montar el componente

  const calendarData = useCalendar(calendarUrl)
  const moonData = useMoonPhase() // Usar fase lunar calculada localmente

  const handleNewEntry = () => {
    console.log('Opening new journal entry editor...')
    // Aquí irá la lógica para abrir el editor de entrada
  }

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
      <CosmicBackground />
      <AppHeader />

      <main className="relative z-10 flex-1 flex flex-col overflow-y-auto pb-32 scrollbar-hide">
        <div className="w-full max-w-200 mx-auto flex flex-col">
          {/* Moon Phase Widget */}
          <section className="mt-4 px-6 relative">
            <MoonPhaseWidget 
              phase={moonData.phase} 
              illumination={moonData.illumination}
              loading={moonData.loading}
            />
            <WeekCalendar 
              days={calendarData.days}
              activeDay={calendarData.activeDay}
              loading={calendarData.loading}
            />
          </section>

          {/* Favorite Readings Carousel */}
          <FavoriteReadingsCarousel />

          {/* Recent Journal Entries */}
          <JournalEntryList />
        </div>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton 
        text="Escribe tus Pensamientos"
        icon="auto_stories"
        onClick={handleNewEntry}
      />

      <BottomNavigation />
		</div>
	)
}

export default Diario
