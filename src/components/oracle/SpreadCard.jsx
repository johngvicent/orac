import React from 'react'
import PropTypes from 'prop-types'

/**
 * SpreadCard - Tarjeta de tirada de tarot
 * Componente reutilizable que muestra información sobre una tirada específica
 */
function SpreadCard({ icon, title, description, onSelect }) {
  return (
    <div className="flex-none w-64 aspect-3/4 rounded-xl border border-primary/40 bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between items-center text-center relative overflow-hidden group">
      {/* Efecto hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icono */}
      <span className="material-icons-outlined text-4xl text-primary/80 mb-2 relative z-10">
        {icon}
      </span>
      
      {/* Contenido */}
      <div className="relative z-10">
        <h3 className="font-display text-lg text-primary mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-sm italic text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Botón */}
      <button 
        onClick={onSelect}
        className="mt-4 border-b border-primary/40 text-xs tracking-widest text-primary uppercase pb-1 hover:border-primary transition-colors relative z-10"
      >
        Selecciona Estilo
      </button>
    </div>
  )
}

SpreadCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func
}

SpreadCard.defaultProps = {
  onSelect: () => {}
}

export default SpreadCard
