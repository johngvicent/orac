import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="relative z-10 pt-8 pb-6 px-6 text-center">
      <h2 className="text-slate-400 font-display text-xl tracking-[0.25em] text-primary uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 font-serif italic text-sm mt-2">
          {subtitle}
        </p>
      )}
      <div className="h-px w-16 bg-primary/30 mx-auto mt-2"></div>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default PageTitle
