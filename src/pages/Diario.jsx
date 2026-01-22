import React from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'

function Diario() {
	return (
		<div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
			<CosmicBackground />
			<AppHeader />

			<main className="relative z-10 flex-1 overflow-y-auto px-6 py-6 pb-24">
				<div className="max-w-md mx-auto bg-midnight/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
					<h2 className="font-display text-primary tracking-widest uppercase text-sm">
						Diario
					</h2>
					<p className="mt-3 text-slate-400 font-serif italic text-sm leading-relaxed">
						Próximamente: escribe tus reflexiones y guarda tus lecturas.
					</p>
				</div>
			</main>

			<BottomNavigation />
		</div>
	)
}

export default Diario
