import React from 'react'
import PropTypes from 'prop-types'
import LoreCard from './LoreCard'

/**
 * LoreSection - Sección de conocimiento de arcanos
 * Muestra las diferentes categorías de arcanos disponibles
 */
function LoreSection({ loreItems, onLoreClick }) {
  return (
    <section className="mb-12 px-6">
      <h2 className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-6">
        Arcana Lore
      </h2>
      
      <div className="space-y-4">
        {loreItems.map((item) => (
          <LoreCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onClick={() => onLoreClick(item)}
          />
        ))}
      </div>
    </section>
  )
}

LoreSection.propTypes = {
  loreItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  onLoreClick: PropTypes.func
}

LoreSection.defaultProps = {
  onLoreClick: () => {}
}

export default LoreSection
