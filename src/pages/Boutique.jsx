import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import BoutiqueProductCard from '../components/oracle/BoutiqueProductCard'
import ShoppingCart from '../components/oracle/ShoppingCart'

/**
 * Boutique - Página de productos y compras
 * Muestra todos los productos disponibles con carrito de compras
 */

// Productos de la boutique (sin el botón "Explora")
const boutiqueProducts = [
  {
    id: 'midnight-deck',
    image: '/assets/store/tattoo-tarot-b.jpg',
    title: 'Tattoo Tarot Deck',
    subtitle: 'Estética-Urbana 78 cartas',
    price: 79.99
  },
  {
    id: 'obsidian-crystal',
    image: '/assets/store/alch-tarot-a.jpg', 
    title: 'Tarot Alquímico',
    subtitle: 'Ilustraciones Místicas 78 cartas',
    price: 59.99
  },
  {
    id: 'velvet-cloth',
    image: '/assets/store/libro-astrology-a.jpg',
    title: 'Libro de Astrología',
    subtitle: 'Librería Akelarre 4ta Edición',
    price: 45.5
  },
  {
    id: 'silk-tarot-bag',
    image: null,
    title: 'Bolsa de Seda para Tarot',
    subtitle: 'Terciopelo negro bordado',
    price: 24.99
  },
  {
    id: 'crystal-pendulum',
    image: null,
    title: 'Péndulo de Cristal',
    subtitle: 'Cuarzo rosa con cadena',
    price: 34.99
  },
  {
    id: 'moon-journal',
    image: null,
    title: 'Diario Lunar',
    subtitle: 'Registro de fases lunares',
    price: 28.50
  },
  {
    id: 'incense-collection',
    image: null,
    title: 'Colección de Inciensos',
    subtitle: 'Set de 12 aromas místicos',
    price: 39.99
  },
  {
    id: 'tarot-mat',
    image: null,
    title: 'Tapete para Tiradas',
    subtitle: 'Diseño de luna y estrellas',
    price: 32.00
  }
]

function Boutique() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])

  // Agregar producto al carrito
  const handleAddToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      
      if (existingItem) {
        // Incrementar cantidad si ya existe
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Agregar nuevo producto con cantidad 1
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }, [])

  // Remover producto del carrito
  const handleRemoveFromCart = useCallback((productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }, [])

  // Proceder al checkout
  const handleCheckout = useCallback(() => {
    console.log('Checkout con items:', cartItems)
    // Aquí se puede implementar la lógica de pago
    alert('Función de pago próximamente disponible')
  }, [cartItems])

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
      <CosmicBackground />
      <AppHeader />

      <main className="relative z-10 flex-1 overflow-y-auto pb-24 lg:pb-8">
        <div className="w-full max-w-350 mx-auto px-6 py-8">
          {/* Título de la página */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors mb-4"
            >
              <span className="material-icons-outlined">arrow_back</span>
              <span className="text-sm uppercase tracking-wide">Volver</span>
            </button>
            <h1 className="font-display text-3xl tracking-[0.2em] text-primary uppercase">
              Orac Boutique
            </h1>
            <p className="text-slate-400 italic mt-2">
              Descubre nuestros productos místicos y esotéricos
            </p>
          </div>

          {/* Grid con productos y carrito */}
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-8">
            {/* Grid de productos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 lg:mb-0">
              {boutiqueProducts.map((product) => (
                <BoutiqueProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                  onProductClick={() => handleAddToCart(product)}
                />
              ))}
            </div>

            {/* Carrito - Desktop: al lado, Mobile: abajo fijo */}
            <div className="hidden lg:block lg:sticky lg:top-8 lg:self-start">
              <ShoppingCart
                items={cartItems}
                onRemoveItem={handleRemoveFromCart}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Carrito fijo en mobile - 25% de altura */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 h-[25vh] bg-midnight/95 backdrop-blur-lg border-t border-primary/40 overflow-y-auto custom-scrollbar">
        <div className="p-4 h-full">
          <ShoppingCart
            items={cartItems}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default Boutique
