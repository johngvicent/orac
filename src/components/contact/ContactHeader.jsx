import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function ContactHeader({ title = "CONTACT" }) {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Orac Sanctuary',
        text: 'Connect with the Architects of Orac.',
        url: window.location.href,
      })
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API not supported');
    }
  }

  return (
    <header className="relative z-10 pt-12 pb-6 px-6 flex justify-between items-center bg-transparent">
      <button 
        onClick={handleBack}
        className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors"
        aria-label="Go back"
      >
        <span className="material-icons-outlined text-primary text-2xl">arrow_back_ios_new</span>
      </button>

      <h1 className="font-display text-xl tracking-[0.2em] text-primary">{title}</h1>

      <button 
        onClick={handleShare}
        className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors"
        aria-label="Share"
      >
        <span className="material-icons-outlined text-primary text-2xl">share</span>
      </button>
    </header>
  )
}

ContactHeader.propTypes = {
  title: PropTypes.string
}

export default ContactHeader
