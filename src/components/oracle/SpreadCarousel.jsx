import React from 'react'
import PropTypes from 'prop-types'
import SpreadCard from './SpreadCard'

/**
 * SpreadCarousel - Carrusel de tiradas de tarot
 * Componente que muestra un scroll horizontal de diferentes tiradas
 */
function SpreadCarousel({ spreads, onSpreadSelect }) {
  return (
    <section className="mb-12">
      <h2 className="font-display text-sm tracking-[0.3em] text-primary uppercase px-6 mb-6">
        Elige tu Destino
      </h2>
      
      <div className="flex overflow-x-auto custom-scrollbar gap-5 px-6 pb-4">
        {spreads.map((spread) => (
          <SpreadCard
            key={spread.id}
            icon={spread.icon}
            title={spread.title}
            description={spread.description}
            onSelect={() => onSpreadSelect(spread)}
          />
        ))}
      </div>
    </section>
  )
}

SpreadCarousel.propTypes = {
  spreads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  onSpreadSelect: PropTypes.func
}

SpreadCarousel.defaultProps = {
  onSpreadSelect: () => {}
}

export default SpreadCarousel
