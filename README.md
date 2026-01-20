# 🧙‍♂️ ORAC - Oráculo Digital

> "El Cosmos Espera. Mira Hacia Tu Interior y Revela Tu Camino de Hoy"

## 🌟 ¿Qué es ORAC?

ORAC es una aplicación móvil web de oráculo digital que combina la sabiduría ancestral del tarot con la tecnología moderna. Diseñada como una experiencia inmersiva y espiritual, ORAC ofrece lecturas diarias de tarot con un diseño místico y elegante.

## ✨ Características Principales

### 🎴 Lecturas de Tarot Interactivas
- **Arcanos Mayores Completos**: Base de datos con los 22 arcanos mayores del tarot
- **Lectura Diaria**: Sorteo aleatorio de una carta para guiar tu día
- **Interpretaciones Detalladas**: Descripciones profundas y significados espirituales

### 🎨 Diseño Místico y Elegante
- **Tema Oscuro Cósmico**: Paleta de colores inspirada en el universo
- **Geometría Sagrada**: Elementos visuales con círculos, estrellas y formas sagradas
- **Animaciones Suaves**: Transiciones fluidas y efectos de luz mística
- **Tipografía Premium**: Fuentes Cinzel y Cormorant Garamond para una experiencia premium

### 🔮 Experiencia Inmersiva
- **Portal Místico**: Ojo animado que flota suavemente
- **React Portals**: Modales que se "teletransportan" fuera de la jerarquía DOM
- **Efectos Visuales**: Glows, gradientes y overlays cósmicos
- **Navegación Intuitiva**: Bottom navigation con 5 secciones principales

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19**: Framework principal con hooks modernos
- **Vite**: Build tool ultrarrápido con HMR
- **Tailwind CSS v4**: Sistema de diseño utility-first
- **React Router**: Navegación SPA sin recargas

### Características Técnicas
- **React Portals**: Para modales que flotan sobre todo
- **Responsive Design**: Optimizado para móviles
- **Material Icons**: Iconografía consistente
- **Google Fonts**: Tipografía premium

## 📱 Secciones de la App

### 🏠 Inicio
- Portal del ojo místico con animación flotante
- Prompt espiritual para la lectura diaria
- Botón dorado para sortear la carta

### 🎯 Cartas
- Galería de arcanos mayores
- Búsqueda y filtrado
- Detalles individuales de cada carta

### 📚 Historial
- Registro de lecturas anteriores
- Reflexiones personales
- Seguimiento de patrones

### 📖 Diario
- Espacio para anotaciones espirituales
- Reflexiones sobre lecturas
- Journaling guiado

### 👤 Perfil
- Configuración personal
- Preferencias de lecturas
- Estadísticas de uso

## 🎨 Paleta de Colores

```css
Primary Gold: #D4AF37
Background Dark: #05070A
Midnight: #0A0E14
Stellar: #1B2430
Text: #FFFFFF / #D4AF37
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

### Uso de la Base de Datos de Arcanos

```javascript
import arcanosMayores from './components/cards/arcanos.js'

// Acceder a un arcano específico
const elMago = arcanosMayores[1]
console.log(elMago.nombre) // "El Mago"

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── CosmicBackground.jsx     # Fondo + geometría sagrada
│   │   ├── AppHeader.jsx           # Header con logo
│   │   └── BottomNavigation.jsx    # Navegación inferior
│   ├── ui/
│   │   └── GoldLeafButton.jsx      # Botón dorado reutilizable
│   └── oracle/
│       ├── MysticEyePortal.jsx     # Ojo animado
│       ├── DailyCardPrompt.jsx     # Prompt de lectura
│       └── TarotCard.jsx          # Componente de carta
├── pages/
│   └── Inicio.jsx                  # Página principal
└── components/cards/
    └── arcanos.js                  # Base de datos de arcanos
```

## 🎯 Funcionalidades Implementadas

- ✅ Diseño responsive móvil-first
- ✅ Tema oscuro cósmico
- ✅ Animaciones CSS suaves
- ✅ React Portals para modales
- ✅ Base de datos completa de arcanos mayores
- ✅ Navegación SPA con React Router
- ✅ Componentes reutilizables
- ✅ Tailwind CSS configurado

## 🔮 Próximas Funcionalidades

- [ ] Sistema de lecturas múltiples (3 cartas)
- [ ] Diario espiritual integrado
- [ ] Notificaciones push para lecturas diarias
- [ ] Compartir lecturas en redes sociales
- [ ] Modo offline
- [ ] Personalización de temas
- [ ] Estadísticas de uso

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- Inspirado en la sabiduría ancestral del tarot
- Diseño influenciado por aplicaciones espirituales modernas
- Comunidad de desarrollo React y Tailwind CSS

---

*"En el silencio del cosmos, encuentra tu voz interior"* 🌌
```

