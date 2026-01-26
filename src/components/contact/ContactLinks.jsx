import React from 'react'
import PropTypes from 'prop-types'

function ContactLinks({ links }) {
  const defaultLinks = [
    { icon: 'language', href: 'https://johnvicent.es/', label: 'Website' },
    { icon: 'hub', href: 'https://www.linkedin.com/in/johngonzalezvicent/', label: 'Network' },
    { icon: 'photo_camera', href: 'https://github.com/johngvicent/orac', label: 'GitHub' },
    { icon: 'alternate_email', href: 'mailto:jmgvicent@gmail.com', label: 'Email' }
  ]

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
          <span className="material-icons-outlined gold-leaf-gradient text-2xl group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
        </a>
      ))}
    </section>
  )
}

ContactLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    label: PropTypes.string
  }))
}

export default ContactLinks
