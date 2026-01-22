import { useState, useEffect, useRef } from 'react'

/**
 * Hook personalizado para obtener datos del calendario en tiempo real
 * Puede conectarse a una API real o usar datos simulados
 */
const useCalendar = (apiUrl = null) => {
  const [calendarData, setCalendarData] = useState({
    days: [],
    activeDay: null,
    currentMonth: '',
    currentYear: null,
    loading: true,
    error: null
  })
  
  const isFirstLoad = useRef(true)

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        // Solo mostrar loading en la primera carga
        if (isFirstLoad.current) {
          setCalendarData(prev => ({ ...prev, loading: true, error: null }))
        }

        // Si hay URL de API, hacer fetch real
        if (apiUrl) {
          const response = await fetch(apiUrl)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data = await response.json()
          setCalendarData({
            days: data.days,
            activeDay: data.activeDay,
            currentMonth: data.currentMonth,
            currentYear: data.currentYear,
            loading: false,
            error: null
          })
        } else {
          // Datos simulados basados en la fecha real actual
          const now = new Date()
          const currentDay = now.getDate()
          const currentMonth = now.toLocaleString('en-US', { month: 'long' })
          const currentYear = now.getFullYear()
          
          // Generar 5 días alrededor del día actual
          const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          const weekDays = []
          
          for (let i = -2; i <= 2; i++) {
            const date = new Date(now)
            date.setDate(currentDay + i)
            weekDays.push({
              day: daysOfWeek[date.getDay()],
              date: date.getDate(),
              fullDate: date.toISOString().split('T')[0]
            })
          }

          setCalendarData({
            days: weekDays,
            activeDay: currentDay,
            currentMonth,
            currentYear,
            loading: false,
            error: null
          })
        }
        
        isFirstLoad.current = false
      } catch (error) {
        console.error('Error fetching calendar data:', error)
        setCalendarData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }))
        isFirstLoad.current = false
      }
    }

    fetchCalendarData()

    // Actualizar cada 5 minutos (menos agresivo que cada minuto)
    const interval = setInterval(fetchCalendarData, 300000)

    return () => clearInterval(interval)
  }, [apiUrl])

  return calendarData
}

export default useCalendar
