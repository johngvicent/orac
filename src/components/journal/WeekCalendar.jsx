import React from 'react'
import PropTypes from 'prop-types'

const WeekCalendar = ({ days = [], activeDay = null, loading = false }) => {
  const defaultDays = [
    { day: 'Mon', date: 12 },
    { day: 'Tue', date: 13 },
    { day: 'Wed', date: 14 },
    { day: 'Thu', date: 15 },
    { day: 'Fri', date: 16 }
  ]

  const daysToRender = days.length > 0 ? days : defaultDays

  return (
    <div className={`flex justify-between w-full max-w-sm gap-2 mt-2 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
      {loading && daysToRender.length === 0 ? (
        // Skeleton solo si no hay datos previos
        [1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 py-2 rounded-lg border border-primary/10 animate-pulse"
          >
            <div className="h-3 w-8 bg-primary/10 rounded mb-1"></div>
            <div className="h-4 w-6 bg-primary/10 rounded"></div>
          </div>
        ))
      ) : (
        // Mostrar datos (incluso durante loading si ya hay datos previos)
        daysToRender.map((dayData) => {
          const isActive = dayData.date === activeDay
          return (
            <div
              key={dayData.date}
              className={`flex flex-col items-center flex-1 py-2 rounded-lg border transition-all duration-200 cursor-pointer hover:border-primary/30 ${
                isActive
                  ? 'border-primary bg-primary/5'
                  : 'border-primary/10 hover:bg-primary/5'
              }`}
            >
              <span
                className={`text-[10px] uppercase font-display ${
                  isActive ? 'text-primary' : 'text-slate-500'
                }`}
              >
                {dayData.day}
              </span>
              <span
                className={`text-sm ${
                  isActive ? 'text-primary font-bold' : 'text-slate-200'
                }`}
              >
                {dayData.date}
              </span>
            </div>
          )
        })
      )}
    </div>
  )
}

WeekCalendar.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      fullDate: PropTypes.string
    })
  ),
  activeDay: PropTypes.number,
  loading: PropTypes.bool
}

export default WeekCalendar
