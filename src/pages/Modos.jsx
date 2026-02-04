import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import ContactFooter from '../components/layout/ContactFooter'
import SpreadCarousel from '../components/oracle/SpreadCarousel'
import LoreSection from '../components/oracle/LoreSection'
import BoutiqueSection from '../components/oracle/BoutiqueSection'
import { spreadsData, loreData, boutiqueProducts } from '../data/modosData'

/**
 * Modos - Página de Spreads & Knowledge Hub
 * Permite al usuario explorar diferentes tiradas, conocer sobre arcanos y productos
 */
function Modos() {
	const navigate = useNavigate()

	// Handler para selección de tirada
	const handleSpreadSelect = useCallback((spread) => {
		console.log('Spread selected:', spread)
		// Aquí se puede navegar a una página específica de la tirada
		// navigate(`/tirada/${spread.id}`)
	}, [])

	// Handler para selección de lore
	const handleLoreClick = useCallback((lore) => {
		if (!lore?.id) return
		if (lore.id === 'major-arcana') {
			navigate('/arcanos-mayores')
			return
		}
		if (lore.id === 'minor-arcana') {
			navigate('/arcanos-menores')
			return
		}
		console.log('Lore clicked:', lore)
	}, [navigate])

	// Handler para selección de producto
	const handleProductSelect = useCallback((product) => {
		console.log('Product selected:', product)
		// Aquí se puede implementar la lógica de compra o detalles del producto
	}, [])

	// Handler para contacto
	const handleContactClick = useCallback(() => {
		navigate('/contacto')
	}, [navigate])

	return (
		<div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
			<CosmicBackground />
			<AppHeader />

			<main className="relative z-10 flex-1 overflow-y-auto pb-24">
				<div className="w-full max-w-200 mx-auto">
					{/* Carrusel de tiradas */}
					<SpreadCarousel 
						spreads={spreadsData} 
						onSpreadSelect={handleSpreadSelect}
					/>

					{/* Sección de conocimiento de arcanos */}
					<LoreSection 
						loreItems={loreData}
						onLoreClick={handleLoreClick}
					/>

					{/* Sección de boutique */}
					<BoutiqueSection 
						products={boutiqueProducts}
						onProductSelect={handleProductSelect}
					/>

					{/* Footer de contacto */}
					<ContactFooter onContactClick={handleContactClick} />
				</div>
			</main>

			<BottomNavigation />
		</div>
	)
}

export default Modos
