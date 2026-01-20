import React from 'react'

function ZodiacCard({ 
  sign = "Scorpio", 
  house = "Sun In The 8th House",
  icon = "nights_stay" 
}) {
  return (
    <div 
      className="relative p-6 rounded-2xl overflow-hidden min-h-[220px]"
      style={{
        background: 'rgba(27, 36, 48, 0.4)',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {/* Contenido principal */}
      <div className="relative z-10">
        <h3 className="font-display text-sm tracking-[0.2em] text-primary/80 uppercase mb-4">
          Zodiac Alignment
        </h3>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center bg-black/20">
            <span className="material-symbols-outlined text-4xl text-primary/60">
              {icon}
            </span>
          </div>
          <div>
            <p className="font-display text-xl text-primary uppercase">{sign}</p>
            <p className="font-serif italic text-slate-400">{house}</p>
          </div>
        </div>
      </div>

      {/* SVG geométrico de fondo */}
      <div className="absolute inset-0 opacity-40 pointer-events-none translate-y-4">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle 
            className="geometry-line" 
            cx="100" 
            cy="100" 
            r="80"
            style={{
              stroke: 'rgba(212, 175, 55, 0.15)',
              strokeWidth: '0.5',
              fill: 'none'
            }}
          />
          <polygon 
            className="geometry-line" 
            points="100,20 180,100 100,180 20,100"
            style={{
              stroke: 'rgba(212, 175, 55, 0.15)',
              strokeWidth: '0.5',
              fill: 'none'
            }}
          />
          <path 
            className="geometry-line" 
            d="M20 100 L180 100 M100 20 L100 180"
            style={{
              stroke: 'rgba(212, 175, 55, 0.15)',
              strokeWidth: '0.5',
              fill: 'none'
            }}
          />
          <circle 
            className="geometry-line" 
            cx="100" 
            cy="100" 
            r="40"
            style={{
              stroke: 'rgba(212, 175, 55, 0.15)',
              strokeWidth: '0.5',
              fill: 'none'
            }}
          />
        </svg>
      </div>
    </div>
  )
}

export default ZodiacCard
