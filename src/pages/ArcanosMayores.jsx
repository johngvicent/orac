import React, { useCallback, useMemo, useState } from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import CornerDecorators from '../components/ui/CornerDecorators'
import PageTitle from '../components/ui/PageTitle'
import CardModal from '../components/ui/CardModal'
import TarotCard from '../components/oracle/TarotCard'
import arcanosMayores from '../data/arcanos'

const CARD_IMAGES = import.meta.glob('/assets/cards/*.{jpg,jpeg,png,webp}', {
	eager: true,
	import: 'default'
})

function ArcanosMayores() {
	const [selectedCard, setSelectedCard] = useState(null)

	const resolveImageUrl = useCallback((imagePath) => {
		if (!imagePath) return null
		return CARD_IMAGES[imagePath] ?? imagePath
	}, [])

	const cards = useMemo(
		() =>
			arcanosMayores.map((card) => ({
				...card,
				image: resolveImageUrl(card.image)
			})),
		[resolveImageUrl]
	)

	const handleOpen = useCallback((card) => {
		setSelectedCard(card)
	}, [])

	const handleClose = useCallback(() => {
		setSelectedCard(null)
	}, [])

	return (
		<div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
			<CosmicBackground />
			<CornerDecorators />
			<AppHeader />

			<PageTitle
				title="Arcanos Mayores"
				subtitle="Los 22 pilares del Viaje del Loco"
			/>

			<main className="relative z-10 flex-1 overflow-y-auto pb-24">
				<div className="mx-auto w-full max-w-6xl px-6 pb-8">
					<section aria-label="Grid de Arcanos Mayores">
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
							{cards.map((card) => (
								<button
									key={card.id}
									type="button"
									onClick={() => handleOpen(card)}
									className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
									aria-label={`Abrir detalles de ${card.nombre}`}
								>
									<div className="relative aspect-3/5 w-full">
										{card.image ? (
											<img
												src={card.image}
												alt={card.nombre}
												loading="lazy"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
											/>
										) : (
											<div className="flex h-full w-full items-center justify-center bg-midnight text-slate-500">
												<span className="material-icons-outlined text-4xl">style</span>
											</div>
										)}

										<div className="absolute inset-0 bg-linear-to-t from-background-dark/80 via-background-dark/10 to-transparent" />

										<div className="absolute left-2 top-2 rounded-full border border-primary/30 bg-background-dark/70 px-2 py-1 text-[10px] font-display tracking-widest text-primary backdrop-blur">
											#{String(card.id).padStart(2, '0')}
										</div>

										{/* Solo imagen + número en el grid (sin texto) */}
									</div>
								</button>
							))}
						</div>
					</section>
				</div>
			</main>

			<BottomNavigation />

			<CardModal isOpen={Boolean(selectedCard)} onClose={handleClose}>
				{selectedCard && (
					<TarotCard card={selectedCard} footerLabel="Arcano Mayor" />
				)}
			</CardModal>
		</div>
	)
}

export default ArcanosMayores
