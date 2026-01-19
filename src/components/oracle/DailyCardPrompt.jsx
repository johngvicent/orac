import React from 'react'
import MysticEyePortal from './MysticEyePortal'
import GoldLeafButton from '../ui/GoldLeafButton'

function DailyCardPrompt({ onDrawCard }) {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 text-center">
      {/* Portal del ojo místico */}
      <div className="mb-12">
        <MysticEyePortal />
      </div>

      {/* Texto descriptivo */}
      <div className="space-y-3 mb-12">
        <h2 className="font-[Cinzel] text-2xl tracking-widest text-[#D4AF37]/80 uppercase">
          El Cosmos Espera
        </h2>
        <p className="text-slate-400 font-[Cormorant_Garamond] italic text-xl! max-w-xs mx-auto">
          Concentra tu energía y mira hacia tu interior para revelar tu camino de hoy..
        </p>
      </div>

      {/* Botón principal */}
      <GoldLeafButton onClick={onDrawCard} icon="style">
        Descubre tu Destino de Hoy
      </GoldLeafButton>
    </main>
  )
}

export default DailyCardPrompt
