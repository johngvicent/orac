import React from 'react'
import PropTypes from 'prop-types'

const JournalEntryList = ({ entries = [] }) => {
  const defaultEntries = [
    {
      id: 1,
      title: 'Reflections on Transition',
      timestamp: 'Yesterday • 11:22 PM'
    },
    {
      id: 2,
      title: 'The Full Moon\'s Call',
      timestamp: 'July 12 • 9:15 PM'
    }
  ]

  const entriesToRender = entries.length > 0 ? entries : defaultEntries

  return (
    <section className="mt-10 px-6">
      <h3 className="font-display text-xs tracking-widest text-primary uppercase mb-4">
        Entradas Recientes
      </h3>
      
      <div className="space-y-3">
        {entriesToRender.map((entry) => (
          <div
            key={entry.id}
            className="p-4 border-b border-primary/10 flex justify-between items-center cursor-pointer group hover:bg-primary/5 transition-all duration-200 rounded-lg"
          >
            <div>
              <h4 className="text-sm font-semibold tracking-wide group-hover:text-primary transition-colors">
                {entry.title}
              </h4>
              <span className="text-[10px] text-slate-500 uppercase">
                {entry.timestamp}
              </span>
            </div>
            <span className="material-icons-outlined text-slate-600 group-hover:text-primary transition-colors">
              chevron_right
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

JournalEntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  )
}

export default JournalEntryList
