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
      card: 'The Moon',
      date: 'Oct 24, 2023',
      interpretation: 'Deep intuition and hidden fears surface. Trust your inner voice as you navigate through the uncertainty of the night...',
      spreadType: 'Daily Draw',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMi5WEDu2HygCsEkn2q2RDYTIuKN_i06dmSst99eAizoTgm-qLM8pbSGt3TW77AI1uP3UOF6xi75mUv9VTMJU_kJRY6CkIFg05uwEkJcHu8mIDDAE0mwCgVN-KJ8Hf9I7-z8yBnsFZli45B8V4j9hO1zkBOB3PObpSDZu3YW6e60mdgtUY3ewThfJ0B7q2AwuRHXsSEz252BDFBSresCRbkxBcacu7tXTNfIR9HNeLL9JAhUte9k3QgtJ-W8BfS2FuSuQqgkDPC64'
    },
    {
      id: 2,
      card: 'The Star',
      date: 'Oct 22, 2023',
      interpretation: 'A period of healing and renewed hope. The universe aligns to provide clarity after the storm...',
      spreadType: 'Celtic Cross',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxF1VOzdd3ocoR2utmJxuD08h3jIz0IwiQpEDNUqHpJ1TX1KQ09hWtLmPH2jSNWQ9DaTFSNks9Eh-cKqicDhLXkhzdee0LxTBcAKLI6CgC7edLab0Yhk6Tdj7J0je2uRvlyUNyFBb9CpNGXyjpU95-GOmFCqvYhZM5L5ib0McpY884DwqUcKqoaJezDDl4J9KbcZAuRzn1I_UzjzEfar7sqsqCL_R7T3NL-if0jiOKPIbncSlq0Q_u8Hztsmmqikg-CUwCaXYdD6Q'
    },
    {
      id: 3,
      card: 'The Hermit',
      date: 'Oct 21, 2023',
      interpretation: 'Seek your own light. A time for introspection and inner wisdom rather than external validation...',
      spreadType: 'Daily Draw',
      imageUrl: null
    },
    {
      id: 4,
      card: 'Justice',
      date: 'Oct 19, 2023',
      interpretation: 'Balance and truth prevail. Your actions are weighed with the consequences they deserve...',
      spreadType: 'Daily Draw',
      imageUrl: null
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
        title="Your Journey" 
        subtitle="Explore the wisdom of your past readings"
      />
      
      {/* Contenido Principal */}
      <main className="relative z-10 flex-1 overflow-y-auto px-6 py-4 space-y-4">
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
            {/* Espaciado inferior para evitar que el contenido quede oculto bajo la navegación */}
            <div className="h-10" />
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
      </main>
      
      {/* Navegación Inferior */}
      <BottomNavigation />
    </div>
  )
}

export default Historial
