import React, { useCallback, useEffect, useRef, useState } from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import DailyCardPrompt from '../components/oracle/DailyCardPrompt'
import CardModal from '../components/ui/CardModal'
import TarotCard from '../components/oracle/TarotCard'
import GoldLeafButton from '../components/ui/GoldLeafButton'
import dailyCards from '../data/daily'
import { useDailyTarotCard } from '../hooks/useDailyTarotCard'
import loadingGold from '../assets/ui/loading-gold.gif'

function Inicio() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const revealTimerRef = useRef(null)
  const { card: dailyCard, redraw } = useDailyTarotCard(dailyCards)

  const clearRevealTimer = useCallback(() => {
    if (revealTimerRef.current) {
      clearTimeout(revealTimerRef.current)
      revealTimerRef.current = null
    }
  }, [])

  const startReveal = useCallback(
    (action) => {
      if (isRevealing) return
      clearRevealTimer()

      setModalOpen(true)
      setIsRevealing(true)
      if (typeof action === 'function') action()

      revealTimerRef.current = setTimeout(() => {
        setIsRevealing(false)
        revealTimerRef.current = null
      }, 2000)
    },
    [clearRevealTimer, isRevealing]
  )

  const handleDrawCard = useCallback(() => {
    console.log('Drawing daily card...')
    startReveal()
  }, [startReveal])

  const handleRedraw = useCallback(() => {
    startReveal(redraw)
  }, [redraw, startReveal])

  const handleCloseModal = useCallback(() => {
    clearRevealTimer()
    setIsRevealing(false)
    setModalOpen(false)
  }, [clearRevealTimer])

  useEffect(() => {
    return () => {
      clearRevealTimer()
    }
  }, [clearRevealTimer])

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
        {isRevealing ? (
          <div className="p-10 flex flex-col items-center justify-center gap-6">
            <img
              src={loadingGold}
              alt="Revelando tu carta"
              className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            />
            <div className="text-center">
              <p className="font-[Cinzel] tracking-[0.25em] text-[#D4AF37]/90 uppercase text-xs">
                Leyendo el Cosmos
              </p>
              <p className="mt-2 font-[Cormorant_Garamond] italic text-slate-300">
                Concentra tu intención…
              </p>
            </div>
          </div>
        ) : (
          <>
            <TarotCard card={dailyCard} footerLabel="Tu carta del día" />

            <div className="flex justify-center items-center p-8">
              <GoldLeafButton onClick={handleRedraw} icon="shuffle" disabled={isRevealing}>
                Volver a sacar carta
              </GoldLeafButton>
            </div>
          </>
        )}
      </CardModal>
    </div>
  )
}

export default Inicio
