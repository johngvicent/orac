import React from 'react'
import { NavLink } from 'react-router-dom'

function BottomNavigation() {
  const navItems = [
    { icon: 'auto_awesome_mosaic', label: 'Inicio', to: '/', end: true },
    { icon: 'grid_view', label: 'Modos', to: '/cartas' },
    { icon: 'history', label: 'Historial', to: '/historial' },
    { icon: 'menu_book', label: 'Diario', to: '/diario' },
    { icon: 'person_outline', label: 'Perfil', to: '/perfil' }
  ]

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-20 px-4 pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))] bg-linear-to-t from-background-dark/95 via-background-dark/80 to-transparent supports-backdrop-filter:backdrop-blur-md"
      aria-label="Navegación inferior"
    >
      <div className="flex justify-around items-end max-w-md mx-auto">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 group transition-opacity ${
                isActive ? '' : 'opacity-50 hover:opacity-100'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`material-icons-outlined ${
                    isActive
                      ? 'text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.45)]'
                      : 'text-white group-hover:text-[#D4AF37]'
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-tighter font-[Cinzel] ${
                    isActive
                      ? 'text-[#D4AF37] drop-shadow-[0_0_4px_rgba(212,175,55,0.35)]'
                      : 'text-white group-hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavigation
