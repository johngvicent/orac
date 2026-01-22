import React from 'react'
import PropTypes from 'prop-types'

const MoonPhaseWidget = ({ phase = 'Waxing Crescent', illumination = 0, loading = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 flex items-center justify-center mb-4">
        {/* Geometría sagrada de fondo */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 200 200">
          <circle 
            className="stroke-primary/20 fill-none" 
            cx="100" 
            cy="100" 
            r="80" 
            strokeWidth="0.5"
          />
          <circle 
            className="stroke-primary/20 fill-none" 
            cx="100" 
            cy="100" 
            r="60" 
            strokeWidth="0.5"
          />
          <path 
            className="stroke-primary/20 fill-none" 
            d="M100 10 L100 190 M10 100 L190 100" 
            strokeWidth="0.5"
          />
          <polygon 
            className="stroke-primary/20 fill-none" 
            points="100,20 180,100 100,180 20,100" 
            strokeWidth="0.5"
          />
        </svg>

        {/* Luna con efecto místico */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900 overflow-hidden shadow-[0_0_40px_5px_rgba(212,175,55,0.2)]">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-primary/40"></div>
          <div className="absolute inset-0 translate-x-4 bg-slate-950 rounded-full"></div>
        </div>

        {/* Texto de fase lunar */}
        <div className="absolute bottom-2 font-display text-[10px] tracking-[0.3em] text-primary/80 uppercase">
          {loading ? 'Loading...' : phase}
        </div>
        
        {/* Porcentaje de iluminación */}
        {!loading && illumination > 0 && (
          <div className="absolute -bottom-6 text-[9px] text-slate-500 font-serif italic">
            {illumination}% illuminated
          </div>
        )}
      </div>
    </div>
  )
}

MoonPhaseWidget.propTypes = {
  phase: PropTypes.string,
  illumination: PropTypes.number,
  loading: PropTypes.bool
}

export default MoonPhaseWidget
