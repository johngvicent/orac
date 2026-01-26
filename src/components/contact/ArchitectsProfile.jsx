import React from 'react'

function ArchitectsProfile() {
return (
    <section className="flex flex-col items-center text-center mt-4 mb-2">
        <div className="w-32 h-32 rounded-full border border-primary/40 p-1 mb-6 relative group">
            <div className="w-full h-full rounded-full overflow-hidden border border-primary/20 bg-midnight relative z-10">
                <img 
                    alt="The Architects" 
                    className="w-full h-full object-cover opacity-100 transition-all duration-700" 
                    src="https://johnvicent.es/john-about.jpg"
                />
            </div>
            <div className="absolute inset-0 rounded-full border-[0.5px] border-primary/10 scale-110 group-hover:scale-125 transition-transform duration-700"></div>
        </div>
        <h2 className="font-display text-2xl tracking-[0.25em] text-primary mb-3">JOHN VICENT</h2>
        <p className="text-slate-300 italic max-w-xs leading-relaxed font-serif text-sm">
            Tejiendo lo digital y lo divino desde el corazón de España. Creador del sistema Orac y buscador de la verdad celestial..
        </p>
    </section>
)
}

export default ArchitectsProfile
