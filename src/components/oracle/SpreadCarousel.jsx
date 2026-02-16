import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import SpreadCard from './SpreadCard'

/**
 * SpreadCarousel - Carrusel de tiradas de tarot
 * Componente que muestra un scroll horizontal de diferentes tiradas
 */
function SpreadCarousel({ spreads, onSpreadSelect }) {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300
      const currentScroll = carouselRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="mb-12">
      <h2 className="font-display text-sm tracking-[0.3em] text-primary uppercase px-6 mb-6">
        Elige tu Destino
      </h2>
      
      <div className="relative flex items-center px-8">
        {/* Botón izquierda */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-20 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/40 flex items-center justify-center transition-all duration-300 active:scale-95"
          aria-label="Desplazar carrusel a la izquierda"
        >
          <span className="material-icons-outlined text-primary text-lg">
            chevron_left
          </span>
        </button>

        {/* Carrusel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto custom-scrollbar gap-5 px-20 pb-4 w-full scroll-smooth"
        >
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

        {/* Botón derecha */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-20 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/40 flex items-center justify-center transition-all duration-300 active:scale-95"
          aria-label="Desplazar carrusel a la derecha"
        >
          <span className="material-icons-outlined text-primary text-lg">
            chevron_right
          </span>
        </button>
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
