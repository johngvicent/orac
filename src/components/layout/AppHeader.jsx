import React from 'react'
import { useAuth } from '../../context/AuthContext'

function AppHeader() {
  const { user, openLoginModal, isAuthenticated } = useAuth()

  return (
    <header className="relative z-10 pt-12 pb-4 px-6 flex justify-between items-center">
      {/* Icono izquierdo */}
      <div className="w-10 h-10 flex items-center justify-center">
        <span className="material-icons-outlined text-[#D4AF37] text-2xl">auto_awesome</span>
      </div>

      {/* Logo central */}
      <h1 className="font-[Cinzel] text-2xl tracking-[0.2em] text-[#D4AF37]">ORAC</h1>

      {/* Icono derecho - Login/User */}
      <button 
        onClick={openLoginModal}
        className="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-full transition-all duration-300 group"
      >
        {isAuthenticated ? (
          <div className="relative">
            <span className="material-icons text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">
              account_circle
            </span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background-dark"></span>
          </div>
        ) : (
          <span className="material-icons-outlined text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">
            login
          </span>
        )}
      </button>
    </header>
  )
}

export default AppHeader
