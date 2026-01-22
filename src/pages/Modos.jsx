import React from 'react'
import CosmicBackground from '../components/layout/CosmicBackground'
import AppHeader from '../components/layout/AppHeader'
import BottomNavigation from '../components/layout/BottomNavigation'

function Modos() {
	return (
		<div className="min-h-screen overflow-hidden flex flex-col bg-background-dark text-slate-200">
			<CosmicBackground />
			<AppHeader />

			<main className="relative z-10 flex-1 overflow-y-auto px-6 py-6 pb-24">
				<div className="max-w-md mx-auto space-y-4">
					<div className="bg-midnight/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
						<h2 className="font-display text-primary tracking-widest uppercase text-sm">
							Cartas
						</h2>
						<p className="mt-3 text-slate-400 font-serif italic text-sm leading-relaxed">
							Aquí podrás elegir tiradas y explorar arcanos. Esta sección está en construcción.
						</p>
					</div>

					<div className="bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-5 backdrop-blur-sm">
						<div className="flex items-center gap-3">
							<span className="material-icons text-primary text-2xl">auto_awesome_mosaic</span>
							<div>
								<p className="text-primary font-display tracking-wide">Tiradas</p>
								<p className="text-slate-400 text-sm">Daily Draw, Celtic Cross, y más.</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			<BottomNavigation />
		</div>
	)
}

export default Modos
