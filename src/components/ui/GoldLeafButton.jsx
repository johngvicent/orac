import React from 'react'

function GoldLeafButton({ children, onClick, icon = 'style', disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full max-w-xs py-4 px-8 rounded-full text-[#0A0E14] font-[Cinzel] font-bold tracking-[0.15em] uppercase text-sm flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] active:brightness-110"
      style={{
        background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
      }}
    >
      <span className="material-icons-outlined text-lg">{icon}</span>
      {children}
    </button>
  )
}

export default GoldLeafButton
