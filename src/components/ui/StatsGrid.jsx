import React from 'react'
import StatCard from './StatCard'

function StatsGrid({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard 
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  )
}

export default StatsGrid
