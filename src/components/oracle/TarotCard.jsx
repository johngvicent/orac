import React from 'react'

function TarotCard({ imageUrl, title, description }) {
  return (
    <div className="p-20">
      {/* Imagen de la carta */}
      <div className="relative mb-6 rounded-xl overflow-hidden border border-[#D4AF37]/20">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0E14]/60 to-transparent"></div>
      </div>

      {/* Título de la carta */}
      <h2 className="font-[Cinzel] text-3xl text-[#D4AF37] text-center mb-4 tracking-wide">
        {title}
      </h2>

      {/* Descripción */}
      {description && (
        <p className="font-[Cormorant_Garamond] text-slate-300 text-center text-lg leading-relaxed italic">
          {description}
        </p>
      )}

      {/* Detalles decorativos */}
      <div className="flex justify-center items-center gap-4 mt-6 pt-4 border-t border-[#D4AF37]/20">
        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
        <span className="font-[Cinzel] text-[#D4AF37]/60 text-xs tracking-widest uppercase">
          Daily Reading
        </span>
        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
      </div>
    </div>
  )
}

export default TarotCard
