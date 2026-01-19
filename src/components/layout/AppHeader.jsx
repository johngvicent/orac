import React from 'react'

function AppHeader() {
  return (
    <header className="relative z-10 pt-12 pb-4 px-6 flex justify-between items-center">
      {/* Icono izquierdo */}
      <div className="w-10 h-10 flex items-center justify-center">
        <span className="material-icons-outlined text-[#D4AF37] text-2xl">auto_awesome</span>
      </div>

      {/* Logo central */}
      <h1 className="font-[Cinzel] text-2xl tracking-[0.2em] text-[#D4AF37]">ORAC</h1>

      {/* Icono derecho */}
      <div className="w-10 h-10 flex items-center justify-center">
        <span className="material-icons-outlined text-[#D4AF37] text-2xl">notifications_none</span>
      </div>
    </header>
  )
}

export default AppHeader
