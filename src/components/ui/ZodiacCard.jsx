import React, { useState, useEffect } from 'react'
import zodiacoData from '../../data/zodiaco.js'

function ZodiacCard({ 
  userSign = null // Recibe el signo del usuario o null si no está logueado
}) {
  const [selectedSign, setSelectedSign] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Si hay un signo de usuario, buscar sus datos
    if (userSign) {
      const signData = zodiacoData.find(
        z => z.signo.toLowerCase() === userSign.toLowerCase()
      )
      setSelectedSign(signData || zodiacoData[0])
    } else {
      setSelectedSign(zodiacoData[0])
    }
  }, [userSign])

  if (!selectedSign) return null

  const elementColors = {
    Fuego: 'from-orange-500/20 to-red-500/20',
    Tierra: 'from-green-500/20 to-emerald-500/20',
    Aire: 'from-cyan-500/20 to-blue-500/20',
    Agua: 'from-blue-500/20 to-purple-500/20'
  }

  return (
    <div 
      className="relative p-6 rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(27, 36, 48, 0.4)',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Header con título */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-sm tracking-[0.2em] text-primary/80 uppercase">
            Alineación Zodiacal
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">
              {isExpanded ? 'expand_less' : 'expand_more'}
            </span>
          </button>
        </div>

        {/* Signo principal */}
        <div className="flex items-center gap-6 mb-6">
          <div className={`w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center bg-linear-to-br ${elementColors[selectedSign.elemento]}`}>
            <span className="material-symbols-outlined text-4xl text-primary/80">
              {selectedSign.icon}
            </span>
          </div>
          <div className="flex-1">
            <p className="font-display text-2xl text-primary uppercase tracking-wide">
              {selectedSign.signo}
            </p>
            <p className="font-serif italic text-slate-400 text-sm">
              {selectedSign.fechas}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-display tracking-wider text-primary/60">
                {selectedSign.elemento}
              </span>
            </div>
          </div>
        </div>

        {/* Información expandida */}
        {isExpanded && (
          <div className="space-y-4 animate-fadeIn border-t border-primary/10 pt-4">
            {/* Rasgos */}
            <div>
              <h4 className="font-display text-xs tracking-widest text-primary/70 uppercase mb-2">
                Rasgos
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSign.rasgos.map((rasgo, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-serif text-slate-300"
                  >
                    {rasgo}
                  </span>
                ))}
              </div>
            </div>

            {/* Compatibilidad */}
            <div>
              <h4 className="font-display text-xs tracking-widest text-primary/70 uppercase mb-2">
                Compatibles
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSign.compatibles.map((compatible, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-stellar/60 border border-primary/10 text-xs font-serif text-slate-200"
                  >
                    {compatible}
                  </span>
                ))}
              </div>
            </div>

            {/* Arcanos asociados */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-midnight/40 p-3 rounded-lg border border-primary/10">
                <h4 className="font-display text-xs tracking-widest text-primary/70 uppercase mb-1">
                  Arcano Mayor
                </h4>
                <p className="font-serif text-sm text-slate-200">
                  {selectedSign.arcanoMayor}
                </p>
              </div>
              <div className="bg-midnight/40 p-3 rounded-lg border border-primary/10">
                <h4 className="font-display text-xs tracking-widest text-primary/70 uppercase mb-1">
                  Arcano Menor
                </h4>
                <p className="font-serif text-sm text-slate-200">
                  {selectedSign.arcanoMenor}
                </p>
              </div>
            </div>

            {/* Selector de signos */}
            {!userSign && (
              <div className="pt-2">
                <h4 className="font-display text-xs tracking-widest text-primary/70 uppercase mb-3">
                  Explorar Signos
                </h4>
                <div className="grid grid-cols-6 gap-2">
                  {zodiacoData.map((signo) => (
                    <button
                      key={signo.id}
                      onClick={() => setSelectedSign(signo)}
                      className={`aspect-square rounded-lg border transition-all ${
                        selectedSign.id === signo.id
                          ? 'border-primary bg-primary/10 scale-105'
                          : 'border-primary/20 bg-midnight/40 hover:border-primary/40 hover:bg-primary/5'
                      }`}
                      title={signo.signo}
                    >
                      <span className="material-symbols-outlined text-base text-primary/60">
                        {signo.icon}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
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
