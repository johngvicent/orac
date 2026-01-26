import React from 'react'
import PropTypes from 'prop-types'

/**
 * BoutiqueProductCard - Tarjeta de producto de la boutique
 * Componente que muestra un producto disponible para compra
 */
function BoutiqueProductCard({ image, title, subtitle, price, onProductClick }) {
  return (
    <button
      onClick={onProductClick}
      className="w-full text-left group"
    >
      {/* Imagen del producto */}
      <div className="aspect-square rounded-lg bg-midnight border border-white/10 overflow-hidden relative mb-2 group-hover:border-primary/30 transition-colors">
        {image ? (
          <img
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            src={image}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stellar/50">
            <span className="material-icons-outlined text-4xl text-primary/20">
              diamond
            </span>
          </div>
        )}
        
        {/* Etiqueta de precio */}
        <div className="absolute bottom-2 right-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] text-midnight px-2 py-0.5 rounded text-[10px] font-bold font-display shadow-lg">
          ${price}
        </div>
      </div>
      
      {/* Información del producto */}
      <h5 className="text-sm font-display text-primary uppercase tracking-tighter group-hover:text-primary/80 transition-colors">
        {title}
      </h5>
      <p className="text-xs italic text-slate-500">
        {subtitle}
      </p>
    </button>
  )
}

BoutiqueProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onProductClick: PropTypes.func
}

BoutiqueProductCard.defaultProps = {
  image: null,
  onProductClick: () => {}
}

export default BoutiqueProductCard
