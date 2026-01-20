import React from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import UserAvatarSection from '../components/ui/UserAvatarSection'
import StatsGrid from '../components/ui/StatsGrid'
import ZodiacCard from '../components/ui/ZodiacCard'

function Perfil() {
  // Datos de estadísticas
  const stats = [
    {
      icon: 'style',
      title: 'Lecturas Diarias',
      value: '124'
    },
    {
      icon: 'auto_stories',
      title: 'Baraja Favorita',
      value: 'CELESTIAL ETHER'
    },
    {
      icon: 'visibility',
      title: 'Insights Compartidos',
      value: '42'
    }
  ]

  return (
    <div className="bg-background-dark font-serif text-slate-200 overflow-hidden h-screen flex flex-col">
      {/* Fondo cósmico con geometría sagrada */}
      <CosmicBackground />

      {/* Esquinas decorativas */}
      <div className="fixed top-0 left-0 w-24 h-24 border-t border-l border-primary/10 rounded-tl-3xl pointer-events-none mt-10 ml-4"></div>
      <div className="fixed top-0 right-0 w-24 h-24 border-t border-r border-primary/10 rounded-tr-3xl pointer-events-none mt-10 mr-4"></div>

      {/* Header */}
      <AppHeader 
        title="Perfil" 
        leftIcon="settings" 
        rightIcon="share" 
      />

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto px-6 pb-24">
        {/* Avatar y nombre del usuario */}
        <UserAvatarSection 
          name="Practicante Adepto"
          level="VII"
        />

        {/* Grid de estadísticas */}
        <StatsGrid stats={stats} />

        {/* Tarjeta zodiacal */}
        <ZodiacCard 
          sign="Scorpio"
          house="Sun In The 8th House"
          icon="nights_stay"
        />
      </main>

      {/* Bottom Navigation - Profile activo */}
      <BottomNavigation activeItem="Perfil" />
    </div>
  )
}

export default Perfil
