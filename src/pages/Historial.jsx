import React, { useState, useEffect } from 'react'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import CosmicBackground from '../components/layout/CosmicBackground'
import PageTitle from '../components/ui/PageTitle'
import HistoryCard from '../components/ui/HistoryCard'
import CornerDecorators from '../components/ui/CornerDecorators'

const Historial = () => {
  // Mock data - en una app real vendría de un backend o contexto
  const [historyData, setHistoryData] = useState([
    {
      id: 1,
      card: 'La Luna',
      date: 'Oct 24, 2023',
      interpretation: 'La intuición profunda y los miedos ocultos emergen. Confía en tu voz interior mientras navegas por la incertidumbre de la noche....',
      spreadType: 'Predicción Diaria',
      imageUrl: '/assets/cards/18-the-moon.jpg'
    },
    {
      id: 2,
      card: 'La estrella',
      date: 'Oct 22, 2023',
      interpretation: 'Un período de sanación y esperanza renovada. El universo se alinea para proporcionar claridad después de la tormenta...',
      spreadType: 'Predicción Diaria',
      imageUrl: '/assets/cards/17-the-star.jpg'
    },
    {
      id: 3,
      card: 'El Ermitaño',
      date: 'Oct 21, 2023',
      interpretation: 'Busca tu propia luz. Un momento para la introspección y la sabiduría interior en lugar de la validación externa...',
      spreadType: 'Predicción Diaria',
      imageUrl: '/assets/cards/09-the-hermit.jpg'
    },
    {
      id: 4,
      card: 'La Justicia',
      date: 'Oct 19, 2023',
      interpretation: 'El equilibrio y la verdad prevalecen. Tus acciones se ponderan con las consecuencias que merecen...',
      spreadType: 'Predicción Diaria',
      imageUrl: '/assets/cards/11-the-justice.jpg'
    }
  ])

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-background-dark">
      {/* Background Cósmico */}
      <CosmicBackground />
      
      {/* Decoradores de Esquina */}
      <CornerDecorators />
      
      {/* Header */}
      <AppHeader />
      
      {/* Título de la Página */}
      <PageTitle 
        title="Tu Jornada" 
        subtitle="Explora la sabiduría de tus lecturas pasadas"
      />
      
      {/* Contenido Principal */}
      <main className="relative z-10 flex-1 overflow-y-auto px-6 py-4 pb-24">
        <div className="max-w-225 mx-auto space-y-4">
          {historyData.length > 0 ? (
            <>
              {historyData.map((entry) => (
                <HistoryCard
                  key={entry.id}
                  card={entry.card}
                  date={entry.date}
                  interpretation={entry.interpretation}
                  spreadType={entry.spreadType}
                  imageUrl={entry.imageUrl}
                />
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="material-icons-outlined text-primary/30 text-6xl mb-4">
                history
              </span>
              <p className="text-slate-400 font-serif italic">
                No readings yet. Start your journey with a daily draw.
              </p>
            </div>
          )}
        </div>
      </main>
      
      {/* Navegación Inferior */}
      <BottomNavigation />
    </div>
  )
}

export default Historial
