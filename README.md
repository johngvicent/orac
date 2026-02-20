# Orac — Oracle & Tarot Web App

**Orac** es una aplicación web de oráculo y tarot diseñada como experiencia inmersiva e interactiva. Combina estética mística con funcionalidades modernas: tiradas de cartas del tarot, diario personal, seguimiento de fases lunares, lore de arcanos y una boutique integrada.

---

## Características principales

### Inicio — Carta del día
La pantalla de inicio presenta la **carta del tarot del día**, seleccionada de forma dinámica mediante un hook personalizado (`useDailyTarotCard`). El usuario puede revelar la carta con una animación de transición y acceder a su interpretación completa a través de un modal.

### Cartas — Modos y Tiradas
Página central del oráculo que integra tres secciones:
- **SpreadCarousel** — carrusel interactivo con diferentes tipos de tiradas (3 cartas, Celtic Cross, etc.)
- **LoreSection** — acceso al conocimiento de los Arcanos Mayores y Menores
- **BoutiqueSection** — previsualización de productos con acceso a la tienda completa

### Arcanos Mayores y Arcanos Menores
Páginas dedicadas al **lore completo del tarot**, con fichas detalladas de cada arcano: significado, elemento, planeta, numerología y descripción simbólica. Los datos se centralizan en archivos de datos locales (`arcanos.js`).

### Historial
Registro de las lecturas anteriores del usuario, con tarjetas de historial que muestran fecha, cartas leídas y tirada utilizada.

### Diario
Diario personal con integración de:
- **Fase lunar en tiempo real** calculada localmente (`useMoonPhase`)
- **Calendario semanal** con soporte opcional para Google Calendar API
- **Carrusel de lecturas favoritas**
- **Lista de entradas del diario** con botón de acción flotante para nuevas entradas

### Boutique
Tienda integrada con catálogo de productos de temática mística (velas, inciensos, accesorios). Incluye carrito de compras (`ShoppingCart`) y tarjetas de producto (`BoutiqueProductCard`).

### Perfil
Panel de usuario con avatar, estadísticas de uso (consultas realizadas, racha de días, arcano favorito) y zona zodiacal. Contiene modal de login y gestión de autenticación mediante contexto global (`AuthContext`).

### Contacto
Página de presentación del creador con:
- Perfil profesional del arquitecto/diseñador
- Mapa interactivo embebido con **Leaflet / React Leaflet**
- Tarjeta de ubicación y enlaces de contacto

---

## Tecnologías utilizadas

| Categoría             | Tecnología                          |
|-----------------------|-------------------------------------|
| Framework             | [React 19](https://react.dev/)      |
| Bundler               | [Vite](https://vite.dev/) (rolldown-vite) |
| Enrutamiento          | [React Router DOM v7](https://reactrouter.com/) |
| Estilos               | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS |
| Mapas                 | [Leaflet](https://leafletjs.com/) / [React Leaflet](https://react-leaflet.js.org/) |
| Iconografía           | [Font Awesome](https://fontawesome.com/) (SVG Core + React) |
| Linting               | [ESLint 9](https://eslint.org/) + plugins React Hooks / React Refresh |
| Deploy                | [Vercel](https://vercel.com/)       |
| Tipografías           | Cinzel, tipografías serif de estilo místico (Google Fonts) |

---

## Arquitectura del proyecto

```
src/
├── assets/          # Imágenes, prototipos y recursos visuales
├── components/      # Componentes reutilizables organizados por dominio
│   ├── contact/     # Sección de contacto (mapa, perfil, links)
│   ├── journal/     # Diario: calendario, fases lunares, entradas
│   ├── layout/      # Header, navegación inferior, fondo cósmico
│   ├── oracle/      # Cartas de tarot, tiradas, boutique, portal místico
│   └── ui/          # Componentes genéricos (modales, botones, estadísticas)
├── context/         # AuthContext — autenticación global
├── data/            # Datos estáticos: arcanos, zodiaco, productos, etc.
├── hooks/           # Custom hooks: calendario, fase lunar, carta del día
├── pages/           # Vistas principales de la app (rutas)
└── services/        # Servicios: authService
```

---

## Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/orac.git
cd orac

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

### Variables de entorno (opcionales)

```env
VITE_GOOGLE_CALENDAR_ID=your_calendar_id
VITE_GOOGLE_API_KEY=your_api_key
```

> Sin estas variables el calendario semanal funciona con datos locales sin necesidad de conexión externa.

---

## Autor

**John Vicent**  
Diseñador Multimedia y Front End Developer

Apasionado por la intersección entre el diseño visual y el desarrollo web. Crea experiencias digitales que fusionan estética, funcionalidad e interactividad, con atención al detalle en cada componente.

---

*Orac — Donde la tecnología y el misticismo convergen.*
