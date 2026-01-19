import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ year, companyName, socialLinks }) {
  return (
    <footer className="bg-slate-900! text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* COLUMNA 1: Marca y descripción */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text  inline-block">
              {companyName}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Llevando la mejor experiencia de sonido a tus oídos desde 2020. Calidad premium garantizada.
            </p>
          </div>

          {/* COLUMNA 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Explorar
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-indigo-400 transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-400 transition-colors">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Redes Sociales */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-bold">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR: Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {year} {companyName}. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Hecho con React y Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
