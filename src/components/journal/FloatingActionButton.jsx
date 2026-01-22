import React from 'react'
import PropTypes from 'prop-types'

const FloatingActionButton = ({ text = 'Write New Vision', icon = 'auto_stories', onClick }) => {
  return (
    <div className="fixed bottom-24 left-0 right-0 z-30 px-8 flex justify-center pointer-events-none">
      <button
        onClick={onClick}
        className="w-full max-w-xs py-4 px-8 rounded-full text-[#0A0E14] font-[Cinzel] font-bold tracking-[0.15em] uppercase text-sm flex items-center justify-center gap-3 pointer-events-auto shadow-2xl transition-all duration-300 hover:scale-105 active:scale-98 bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] text-midnight hover:brightness-110"
        style={{
          background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
        }}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span>
        {text}
      </button>
    </div>
  )
}

FloatingActionButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

export default FloatingActionButton
