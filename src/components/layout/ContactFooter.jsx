import React from 'react'
import PropTypes from 'prop-types'
import GoldLeafButton from '../ui/GoldLeafButton'

/**
 * ContactFooter - Footer con información de contacto y redes sociales
 * Componente que muestra opciones de contacto y copyright
 */
function ContactFooter({ onContactClick }) {
  const socialLinks = [
    { id: 'share', icon: 'share', label: 'Compartir' },
    { id: 'forum', icon: 'forum', label: 'Foro' },
    { id: 'mail', icon: 'mail', label: 'Email' }
  ]

  const handleSocialClick = (socialId) => {
    console.log(`Social link clicked: ${socialId}`)
    // Aquí se puede implementar la lógica específica para cada red social
  }

  return (
    <footer className="px-6 py-8 border-t border-white/5 flex flex-col items-center text-center">
      <h2 className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-6">
        Conecta con el Creador
      </h2>
      
      {/* Enlaces sociales */}
      <div className="flex gap-8 mb-8">
        {socialLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleSocialClick(link.id)}
            className="text-primary hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label={link.label}
          >
            <span className="material-icons-outlined">
              {link.icon}
            </span>
          </button>
        ))}
      </div>
      
      {/* Botón de contacto */}
      <GoldLeafButton onClick={onContactClick} icon="support_agent">
        Santuario de Contacto
      </GoldLeafButton>
      
      {/* Copyright */}
      <p className="mt-8 text-[10px] text-slate-600 tracking-widest">
        © MMXXVI JOHN VICENT · TODOS LOS DERECHOS RESERVADOS.
      </p>
    </footer>
  )
}

ContactFooter.propTypes = {
  onContactClick: PropTypes.func
}

ContactFooter.defaultProps = {
  onContactClick: () => {}
}

export default ContactFooter
