import React from 'react'
import PropTypes from 'prop-types'
import BoutiqueProductCard from './BoutiqueProductCard'

/**
 * BoutiqueSection - Sección de productos de la boutique
 * Muestra una grid de productos disponibles
 */
function BoutiqueSection({ products, onProductSelect }) {
  return (
    <section className="mb-12 px-6">
      <h2 className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-6">
        Orac Boutique
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <BoutiqueProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            onProductClick={() => onProductSelect(product)}
          />
        ))}
      </div>
    </section>
  )
}

BoutiqueSection.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  onProductSelect: PropTypes.func
}

BoutiqueSection.defaultProps = {
  onProductSelect: () => {}
}

export default BoutiqueSection
