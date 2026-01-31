import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import DailyCardPrompt from '../components/oracle/DailyCardPrompt'
import CardModal from '../components/ui/CardModal'
import TarotCard from '../components/oracle/TarotCard'
import GoldLeafButton from '../components/ui/GoldLeafButton'
import dailyCards from '../data/daily'
import { useDailyTarotCard } from '../hooks/useDailyTarotCard'

function Inicio() {
  const [modalOpen, setModalOpen] = useState(false)
  const { user, isAuthenticated } = useAuth()
  const { card: dailyCard, redraw } = useDailyTarotCard(dailyCards)

  const handleDrawCard = () => {
    console.log('Drawing daily card...')
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-[#05070A] text-slate-200 pb-24">
      {/* Fondo cósmico + geometría sagrada */}
      <CosmicBackground />

      {/* Header con logo e iconos */}
      <AppHeader />

      {/* Contenido principal: ojo místico + prompt */}
      <DailyCardPrompt onDrawCard={handleDrawCard} />

      {/* Navegación inferior */}
      <BottomNavigation />

      {/* Portal Modal - Se renderiza fuera de esta jerarquía */}
      <CardModal isOpen={modalOpen} onClose={handleCloseModal}>
        <TarotCard card={dailyCard} footerLabel="Tu carta del día" />

        <div className="flex justify-center items-center p-8">
          <GoldLeafButton onClick={redraw} icon="shuffle">
            Volver a sacar carta
          </GoldLeafButton>
        </div>
      </CardModal>
    </div>
  )
}

export default Inicio
