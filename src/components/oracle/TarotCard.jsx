import React, { useMemo } from 'react'

function TarotCard({
  card,
  imageUrl,
  title,
  description,
  meaning,
  footerLabel = 'Daily Reading'
}) {
  const resolved = useMemo(() => {
    if (card) {
      return {
        id: card.id,
        imageUrl: card.image ?? imageUrl,
        title: card.nombre ?? title,
        description: card.descripcion ?? description,
        meaning: card.significado ?? meaning
      }
    }

    return {
      id: undefined,
      imageUrl,
      title,
      description,
      meaning
    }
  }, [card, description, imageUrl, meaning, title])

  return (
    <div className="pt-8 pb-2 px-10 max-w-md mx-auto">
      {/* Header con indicador de scroll */}
      <div className="mb-1 text-center animate-bounce">
        <p className="font-[Cinzel] text-[#D4AF37]/70 text-xs tracking-[0.3em] uppercase mb-2">
          Desliza hacia abajo
        </p>
        <span className="material-icons-outlined text-[#D4AF37]/70 text-xl">
          expand_more
        </span>
      </div>

      {/* Imagen de la carta */}
      <div className="relative mb-6 rounded-xl overflow-hidden border border-[#D4AF37]/20">
        <img
          src={resolved.imageUrl}
          alt={resolved.title}
          className="w-full h-auto object-cover"
        />
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0E14]/60 to-transparent"></div>
      </div>

      {/* Título de la carta */}
      <h2 className="font-[Cinzel] text-3xl text-[#D4AF37] text-center mb-4 tracking-wide">
        {resolved.title}
      </h2>

      {/* Descripción */}
      {resolved.description && (
        <p className="font-[Cormorant_Garamond] text-slate-300 text-center text-lg leading-relaxed italic">
          {resolved.description}
        </p>
      )}

      {/* Significado */}
      {resolved.meaning && (
        <p className="mt-4 font-[Cormorant_Garamond] text-slate-400 text-center text-base leading-relaxed">
          <span className="text-[#D4AF37]/80 font-[Cinzel] tracking-wide">Significado:</span>{' '}
          {resolved.meaning}
        </p>
      )}

      {/* Detalles decorativos */}
      <div className="flex justify-center items-center gap-4 mt-6 pt-4 border-t border-[#D4AF37]/20">
        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
        <span className="font-[Cinzel] text-[#D4AF37]/60 text-xs tracking-widest uppercase">
          {footerLabel}{resolved.id !== undefined && resolved.id !== null ? ` · #${resolved.id}` : ''}
        </span>
        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
      </div>
    </div>
  )
}

export default TarotCard
