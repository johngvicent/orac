# API Integration Guide - Calendario y Fase Lunar

## Hooks Disponibles

### useCalendar(apiUrl)
Obtiene datos del calendario en tiempo real.

**Sin API (por defecto):**
```javascript
const calendarData = useCalendar()
// Genera automáticamente 5 días alrededor del día actual
```

**Con API:**
```javascript
const calendarData = useCalendar('https://tu-api.com/calendar')
```

**Formato esperado de la API:**
```json
{
  "days": [
    { "day": "Mon", "date": 22, "fullDate": "2026-01-22" },
    { "day": "Tue", "date": 23, "fullDate": "2026-01-23" }
  ],
  "activeDay": 22,
  "currentMonth": "January",
  "currentYear": 2026
}
```

---

### useMoonPhase(apiUrl)
Calcula o obtiene la fase lunar actual.

**Sin API (por defecto):**
```javascript
const moonData = useMoonPhase()
// Calcula la fase lunar usando algoritmo astronómico
```

**Con API:**
```javascript
const moonData = useMoonPhase('https://api.farmsense.net/v1/moonphases/')
```

**Formato esperado de la API:**
```json
{
  "phase": "Waxing Crescent",
  "illumination": 25,
  "age": 7.5
}
```

---

## APIs Públicas Recomendadas

### Para Fase Lunar:
- **Weather API** (requiere key): `https://api.weatherapi.com/v1/astronomy.json?key=YOUR_KEY&q=auto:ip`
- **Open-Meteo** (gratis): No tiene fase lunar directa
- **Farmsense** (gratis): `https://api.farmsense.net/v1/moonphases/?d=1609459200`

### Para Calendario:
- Usa la implementación por defecto (genera fechas localmente)
- O crea tu propia API backend

---

## Configuración

En `src/pages/Diario.jsx`:

```javascript
// Sin API (usa cálculos locales)
const calendarData = useCalendar()
const moonData = useMoonPhase()

// Con API
const calendarData = useCalendar('https://tu-api.com/calendar')
const moonData = useMoonPhase('https://api-lunar.com/phase')
```

---

## Características

✅ **Actualización automática**: Cada 60 segundos (calendario) y cada hora (luna)
✅ **Loading states**: Muestra animaciones mientras carga
✅ **Error handling**: Maneja errores de red gracefully
✅ **Fallback local**: Si no hay API, usa cálculos locales
✅ **Datos reales**: Basado en `new Date()` del sistema
