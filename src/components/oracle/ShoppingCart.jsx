import React from 'react'
import PropTypes from 'prop-types'

/**
 * ShoppingCart - Componente del carrito de compras
 * Muestra los productos agregados al carrito y el total
 */
function ShoppingCart({ items, onRemoveItem, onCheckout }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="bg-black/40 backdrop-blur-md border border-primary/40 rounded-xl p-6">
      <h3 className="font-display text-lg tracking-[0.2em] text-primary uppercase mb-6 flex items-center gap-2">
        <span className="material-icons-outlined">shopping_cart</span>
        Carrito
      </h3>

      {items.length === 0 ? (
        <div className="text-center py-8">
          <span className="material-icons-outlined text-6xl text-primary/20 mb-3">
            shopping_bag
          </span>
          <p className="text-slate-400 text-sm italic">
            Tu carrito está vacío
          </p>
        </div>
      ) : (
        <>
          {/* Lista de items */}
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto custom-scrollbar">
            {items.map((item) => (
              <div 
                key={item.id}
                className="flex gap-3 pb-4 border-b border-primary/20"
              >
                {/* Imagen miniatura */}
                <div className="w-16 h-16 rounded-lg bg-midnight border border-white/10 overflow-hidden shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-icons-outlined text-2xl text-primary/20">
                        diamond
                      </span>
                    </div>
                  )}
                </div>

                {/* Info del producto */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-display text-primary truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 italic mb-1">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500/80 hover:text-red-500 transition-colors"
                      aria-label="Eliminar del carrito"
                    >
                      <span className="material-icons-outlined text-lg">
                        close
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-primary/40 pt-4 mb-6">
            <div className="flex justify-between items-center text-lg">
              <span className="font-display text-primary tracking-wide">
                Total
              </span>
              <span className="font-bold text-primary">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Botón de checkout */}
          <button
            onClick={onCheckout}
            className="w-full py-3 px-6 rounded-lg bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] text-midnight font-display font-bold tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Proceder al Pago
          </button>
        </>
      )}
    </div>
  )
}

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ),
  onRemoveItem: PropTypes.func,
  onCheckout: PropTypes.func
}

ShoppingCart.defaultProps = {
  items: [],
  onRemoveItem: () => {},
  onCheckout: () => {}
}

export default ShoppingCart
