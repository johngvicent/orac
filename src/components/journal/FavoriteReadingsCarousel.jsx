import React from 'react'
import PropTypes from 'prop-types'
import FavoriteReadingCard from './FavoriteReadingCard'

const FavoriteReadingsCarousel = ({ readings = [] }) => {
  const defaultReadings = [
    {
      id: 1,
      date: 'Jul 12',
      cardName: 'Los Enamorados',
      interpretation: '"Un cruce en el corazón requiere equilibrio..."',
      imageUrl: "/src/assets/cards/06-the-lovers.jpg",
      isFavorite: true
    },
    {
      id: 2,
      date: 'Jul 10',
      cardName: 'La Estrella',
      interpretation: '"La esperanza regresa después de un período de sombra..."',
      imageUrl: "/src/assets/cards/17-the-star.jpg",
      isFavorite: true
    },
    {
      id: 3,
      date: 'Jul 08',
      cardName: 'La Sacerdotisa',
      interpretation: '"Los secretos se susurran en el silencio..."',
      imageUrl: "/src/assets/cards/02-the-high-priestess.jpg",
      isFavorite: true
    }
  ]

  const readingsToRender = readings.length > 0 ? readings : defaultReadings

  return (
    <section className="mt-10">
      <div className="px-6 flex justify-between items-center mb-4">
        <h3 className="font-display text-xs tracking-widest text-primary uppercase">
          Lecturas Favoritas
        </h3>
        <button className="text-[10px] text-slate-500 uppercase tracking-tighter hover:text-primary transition-colors">
          Ver Todas
        </button>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 scrollbar-hide">
        {readingsToRender.map((reading) => (
          <FavoriteReadingCard
            key={reading.id}
            date={reading.date}
            cardName={reading.cardName}
            interpretation={reading.interpretation}
            imageUrl={reading.imageUrl}
            isFavorite={reading.isFavorite}
          />
        ))}
      </div>
    </section>
  )
}

FavoriteReadingsCarousel.propTypes = {
  readings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      cardName: PropTypes.string.isRequired,
      interpretation: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      isFavorite: PropTypes.bool
    })
  )
}

export default FavoriteReadingsCarousel
