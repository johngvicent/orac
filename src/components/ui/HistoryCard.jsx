import React from 'react'
import PropTypes from 'prop-types'

const HistoryCard = ({ card, date, interpretation, spreadType, imageUrl }) => {
  return (
    <div className="history-card rounded-lg p-4 flex gap-4 bg-midnight/60 backdrop-blur-sm border border-primary/30 transition-all duration-300 hover:border-primary/80 hover:bg-stellar/70">
      {/* Card Image */}
      <div className="relative w-16 h-24 shrink-0 bg-black/40 border border-primary/20 rounded-md overflow-hidden">
        {imageUrl ? (
          <img 
            alt={card} 
            className="w-full h-full object-cover opacity-80 mix-blend-lighten" 
            src={imageUrl}
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/50 to-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-icons-outlined text-primary/40 text-2xl">style</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-[#D4AF37] font-display text-primary text-sm tracking-widest uppercase">
            {card}
          </h3>
          <span className="text-[10px] text-primary/60 font-serif italic">
            {date}
          </span>
        </div>
        
        <p className="text-slate-400 font-serif italic text-xs leading-relaxed line-clamp-3">
          {interpretation}
        </p>
        
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[#D4AF37] material-icons-outlined text-[10px] text-primary">
            {spreadType === 'Daily Draw' ? 'history' : 'auto_awesome_mosaic'}
          </span>
          <span className="text-[#D4AF37] text-[9px] uppercase tracking-tighter text-primary/50 font-display">
            {spreadType}
          </span>
        </div>
      </div>
    </div>
  )
}

HistoryCard.propTypes = {
  card: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  interpretation: PropTypes.string.isRequired,
  spreadType: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
}

export default HistoryCard
