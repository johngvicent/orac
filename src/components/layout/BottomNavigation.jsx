import React from 'react'

function BottomNavigation() {
  const navItems = [
    { icon: 'auto_awesome_mosaic', label: 'Inicio', active: true, href: '/' },
    { icon: 'grid_view', label: 'Cartas', active: false, href: '#' },
    { icon: 'history', label: 'Historial', active: false, href: '#' },
    { icon: 'menu_book', label: 'Diario', active: false, href: '#' },
    { icon: 'person_outline', label: 'Perfil', active: false, href: '#' }
  ]

  return (
    <nav className="relative z-10 pb-8 pt-4 px-4 bg-linear-to-t from-[#05070A] to-transparent">
      <div className="flex justify-around items-end max-w-md mx-auto">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex flex-col items-center gap-1 group transition-opacity ${
              item.active ? '' : 'opacity-50 hover:opacity-100'
            }`}
          >
            <span 
              className={`material-icons-outlined ${
                item.active 
                  ? 'text-[#D4AF37]' 
                  : 'text-white group-hover:text-[#D4AF37]'
              }`}
            >
              {item.icon}
            </span>
            <span 
              className={`text-[10px] uppercase tracking-tighter font-[Cinzel] ${
                item.active 
                  ? 'text-[#D4AF37]' 
                  : 'text-white group-hover:text-[#D4AF37]'
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavigation
