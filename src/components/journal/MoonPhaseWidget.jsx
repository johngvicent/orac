import React from 'react'
import PropTypes from 'prop-types'

// Mapeo de fases lunares a imágenes
const moonPhaseImages = {
  'Luna Nueva': '/assets/ui/moon-phases/luna-nueva.svg',
  'Luna Creciente': '/assets/ui/moon-phases/luna-creciente.svg',
  'Cuarto Creciente': '/assets/ui/moon-phases/cuarto-creciente.svg',
  'Gibosa Creciente': '/assets/ui/moon-phases/gibosa-creciente.svg',
  'Luna Llena': '/assets/ui/moon-phases/luna-llena.svg',
  'Gibosa Menguante': '/assets/ui/moon-phases/gibosa-menguante.svg',
  'Cuarto Menguante': '/assets/ui/moon-phases/cuarto-menguante.svg',
  'Luna Menguante': '/assets/ui/moon-phases/luna-menguante.svg'
}

const MoonPhaseWidget = ({ phase = 'Waxing Crescent', illumination = 0, loading = false }) => {
  const moonImage = moonPhaseImages[phase] || moonPhaseImages['Luna Nueva']
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

        {/* Luna con imagen de fase lunar */}
        <div className="relative z-10 w-24 h-24 flex items-center justify-center">
          {loading ? (
            <div className="w-24 h-24 rounded-full bg-slate-900 animate-pulse shadow-[0_0_40px_5px_rgba(212,175,55,0.2)]"></div>
          ) : (
            <img 
              src={moonImage} 
              alt={phase}
              className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            />
          )}
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
