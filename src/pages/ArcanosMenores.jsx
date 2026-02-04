import React from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'
import CornerDecorators from '../components/ui/CornerDecorators'
import PageTitle from '../components/ui/PageTitle'

function ArcanosMenores() {
	return (
		<div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
			<CosmicBackground />
			<CornerDecorators />
			<AppHeader />

			<PageTitle
				title="Arcanos Menores"
				subtitle="Bastos, Copas, Espadas y Oros"
			/>

			<main className="relative z-10 flex-1 overflow-y-auto px-6 pb-24">
				<div className="mx-auto w-full max-w-3xl">
					<div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
						<span className="material-icons-outlined text-primary/50 text-5xl">layers</span>
						<h2 className="mt-4 font-display tracking-[0.2em] text-primary uppercase">
							Próximamente
						</h2>
						<p className="mt-2 font-serif italic text-slate-400">
							Esta sección está en preparación para preservar la estética y coherencia del Oráculo.
						</p>
					</div>
				</div>
			</main>

			<BottomNavigation />
		</div>
	)
}

export default ArcanosMenores
