import React from 'react'

function StatCard({ icon, title, value }) {
  return (
    <div 
      className="p-4 rounded-xl flex items-center justify-between"
      style={{
        background: 'rgba(27, 36, 48, 0.4)',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="flex items-center gap-4">
        <span 
          className="material-symbols-outlined text-3xl"
          style={{
            background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {icon}
        </span>
        <span className="font-serif text-lg text-slate-300">{title}</span>
      </div>
      <span className="font-display text-primary text-xl">{value}</span>
    </div>
  )
}

export default StatCard
