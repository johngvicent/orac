import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

function ContactLinks({ links }) {
  const defaultLinks = useMemo(() => [
    { icon: 'language', iconType: 'material', href: 'https://johnvicent.es/', label: 'Website' },
    { icon: faLinkedin, iconType: 'fontawesome', href: 'https://www.linkedin.com/in/johngonzalezvicent/', label: 'LinkedIn' },
    { icon: faGithub, iconType: 'fontawesome', href: 'https://github.com/johngvicent/orac', label: 'GitHub' },
    { icon: 'alternate_email', iconType: 'material', href: 'mailto:jmgvicent@gmail.com', label: 'Email' }
  ], [])

  const items = links || defaultLinks

  return (
    <section className="flex justify-center gap-6 my-10">
      {items.map((link, index) => (
        <a 
          key={index}
          href={link.href}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 bg-white/5 group active:scale-95 transition-all hover:bg-white/10 hover:border-primary/60"
          aria-label={link.label}
        >
          {link.iconType === 'fontawesome' ? (
            <FontAwesomeIcon 
              icon={link.icon} 
              className="gold-leaf-gradient-svg text-lg group-hover:scale-110 transition-all"
              style={{ color: '#D4AF37' }}
            />
          ) : (
            <span className="material-icons-outlined gold-leaf-gradient text-2xl group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
          )}
        </a>
      ))}
    </section>
  )
}

ContactLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    iconType: PropTypes.oneOf(['material', 'fontawesome']),
    href: PropTypes.string.isRequired,
    label: PropTypes.string
  }))
}

export default ContactLinks
