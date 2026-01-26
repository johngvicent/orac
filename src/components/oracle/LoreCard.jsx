import React from 'react'
import PropTypes from 'prop-types'

/**
 * LoreCard - Tarjeta de conocimiento de arcanos
 * Componente que muestra información sobre Major o Minor Arcana
 */
function LoreCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Icono circular */}
      <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-midnight shrink-0 group-hover:border-primary/50 transition-colors">
        <span className="material-icons-outlined text-primary text-xl">
          {icon}
        </span>
      </div>
      
      {/* Contenido */}
      <div className="flex-1 text-left">
        <h4 className="font-display text-primary text-base tracking-wider">
          {title}
        </h4>
        <p className="text-sm italic text-slate-400 mt-0.5">
          {description}
        </p>
      </div>
      
      {/* Chevron */}
      <span className="material-icons-outlined text-primary/40 group-hover:text-primary/60 transition-colors">
        chevron_right
      </span>
    </button>
  )
}

LoreCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

LoreCard.defaultProps = {
  onClick: () => {}
}

export default LoreCard
