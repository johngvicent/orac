import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ logo, links }) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo con Link a inicio */}
          <Link to="/" className="text-2xl font-bold bg-lineart-to-r! from-indigo-600! to-purple-600! bg-clip-text text-transparent! cursor-pointer">
            {logo}
          </Link>

          <ul className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
