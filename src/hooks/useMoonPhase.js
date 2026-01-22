import { useState, useEffect } from 'react'

/**
 * Hook para obtener la fase lunar actual
 * Puede conectarse a una API lunar real o calcular localmente
 * Las fases lunares se devuelven en español
 */
const useMoonPhase = (apiUrl = null) => {
  const [moonData, setMoonData] = useState({
    phase: 'Cargando...',
    illumination: 0,
    age: 0,
    loading: true,
    error: null
  })

  useEffect(() => {
    const fetchMoonPhase = async () => {
      try {
        setMoonData(prev => ({ ...prev, loading: true, error: null }))

        if (apiUrl) {
          // Fetch desde API real
          const response = await fetch(apiUrl)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data = await response.json()
          setMoonData({
            phase: data.phase,
            illumination: data.illumination,
            age: data.age,
            loading: false,
            error: null
          })
        } else {
          // Cálculo aproximado de fase lunar
          const now = new Date()
          const lunarCycle = 29.53058867 // días
          const knownNewMoon = new Date('2000-01-06T18:14:00Z').getTime()
          const daysSinceNewMoon = (now.getTime() - knownNewMoon) / (1000 * 60 * 60 * 24)
          const moonAge = daysSinceNewMoon % lunarCycle
          const illumination = (1 - Math.cos(moonAge * 2 * Math.PI / lunarCycle)) / 2

          let phaseName
          if (moonAge < 1.84566) {
            phaseName = 'Luna Nueva'
          } else if (moonAge < 5.53699) {
            phaseName = 'Luna Creciente'
          } else if (moonAge < 9.22831) {
            phaseName = 'Cuarto Creciente'
          } else if (moonAge < 12.91963) {
            phaseName = 'Gibosa Creciente'
          } else if (moonAge < 16.61096) {
            phaseName = 'Luna Llena'
          } else if (moonAge < 20.30228) {
            phaseName = 'Gibosa Menguante'
          } else if (moonAge < 23.99361) {
            phaseName = 'Cuarto Menguante'
          } else {
            phaseName = 'Luna Menguante'
          }

          setMoonData({
            phase: phaseName,
            illumination: Math.round(illumination * 100),
            age: Math.round(moonAge * 10) / 10,
            loading: false,
            error: null
          })
        }
      } catch (error) {
        console.error('Error fetching moon phase:', error)
        setMoonData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }))
      }
    }

    fetchMoonPhase()

    // Actualizar cada hora
    const interval = setInterval(fetchMoonPhase, 3600000)

    return () => clearInterval(interval)
  }, [apiUrl])

  return moonData
}

export default useMoonPhase
