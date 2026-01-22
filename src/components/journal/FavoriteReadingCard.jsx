import React from 'react'
import PropTypes from 'prop-types'

const FavoriteReadingCard = ({ date, cardName, interpretation, imageUrl, isFavorite = true }) => {
  return (
    <div className="bg-midnight/60 backdrop-blur-sm border border-primary/30 min-w-[200px] p-4 rounded-xl flex flex-col gap-3 transition-all duration-300 hover:border-primary/50 cursor-pointer">
      <div className="flex justify-between items-start">
        <span className="text-[10px] text-primary/60 font-display uppercase">
          {date}
        </span>
        <span className="material-symbols-outlined text-primary text-sm">
          {isFavorite ? 'stars' : 'star_border'}
        </span>
      </div>

      <div className="h-24 w-full rounded bg-slate-800/50 flex items-center justify-center overflow-hidden relative">
        {imageUrl ? (
          <img
            alt={cardName}
            className="w-full h-full object-cover opacity-30"
            src={imageUrl}
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent"></div>
        )}
        <div className="absolute text-[10px] uppercase tracking-widest text-white/80 font-display">
          {cardName}
        </div>
      </div>

      <p className="text-xs italic text-slate-400 leading-relaxed line-clamp-2">
        {interpretation}
      </p>
    </div>
  )
}

FavoriteReadingCard.propTypes = {
  date: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  interpretation: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isFavorite: PropTypes.bool
}

export default FavoriteReadingCard
