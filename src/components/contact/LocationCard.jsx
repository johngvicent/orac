import React from 'react'
import MapLeaflet from './MapLeaflet'

function LocationCard() {
  const plazaEuropa = { lat: 41.6595575, lng: -0.8920635 }

  return (
    <section className="mt-8 mb-12">
      <div className="relative w-full aspect-video rounded-xl border border-primary/40 overflow-hidden bg-midnight group">
        <div className="absolute inset-0 opacity-80 grayscale contrast-125 group-hover:opacity-100 transition-opacity duration-700">
          <MapLeaflet center={plazaEuropa} zoom={15} popupLabel="Plaza de Europa, Zaragoza" />
        </div>
        
        {/* Pulsing Dot Marker */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 border border-primary/30 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
          </div>
        </div>
        
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]"></div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="font-display text-primary tracking-[0.15em] text-sm mb-1 uppercase">
          Plaza de Europa, 50003
        </p>
        <p className="font-display text-primary/80 tracking-widest text-xs uppercase opacity-70">
          Zaragoza, España
        </p>
      </div>
    </section>
  )
}

export default LocationCard
