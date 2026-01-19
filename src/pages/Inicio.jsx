import React, { useState } from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import DailyCardPrompt from '../components/oracle/DailyCardPrompt'
import CardModal from '../components/ui/CardModal'
import TarotCard from '../components/oracle/TarotCard'

function Inicio() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleDrawCard = () => {
    console.log('Drawing daily card...')
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-[#05070A] text-slate-200">
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
        <TarotCard
          imageUrl="/el-mago-a.jpg"
          title="El Mago"
          description="Hoy es un día de manifestación y creatividad. Tienes todas las herramientas que necesitas para materializar tus deseos. Confía en tu habilidad innata para transformar ideas en realidad."
        />
      </CardModal>
    </div>
  )
}

export default Inicio
