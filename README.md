# Orac — Oracle & Tarot Web App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-rolldown-646CFF?logo=vite&logoColor=white&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white&style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)

> Aplicación web de oráculo y tarot diseñada como experiencia inmersiva. Combina una estética mística con patrones modernos de UI/UX: animaciones fluidas, diseño responsive, lógica de negocio encapsulada en custom hooks y una arquitectura de componentes escalable.

🔗 **[Ver demo en vivo →](https://orac-swart.vercel.app/)**

---

## Capturas de pantalla

> Las capturas muestran la experiencia real en móvil y escritorio.

| Inicio — Carta del día | Tiradas & Lore | Diario & Luna |
|---|---|---|
| ![Inicio](docs/screenshots/inicio.png) | ![Oracle](docs/screenshots/oracle.png) | ![Diario](docs/screenshots/diario.png) |

---

## Decisiones de diseño y UX

### Filosofía visual
El diseño parte de una paleta oscura (`#0A0E14` base, `#D4AF37` dorado como acento) para crear inmersión. La tipografía Cinzel aporta solemnidad sin sacrificar legibilidad. Cada pantalla equilibra densidad de información con espacio negativo para que el usuario no se sienta abrumado.

### Navegación
Se optó por una **barra de navegación inferior fija** (`BottomNavigation`) en lugar de un menú hamburguesa, priorizando el alcance del pulgar en móvil. El header es contextual y solo muestra los controles relevantes para cada vista.

### Interacciones y microanimaciones
- **Revelado de carta**: la carta del día se voltea con una transición CSS 3D, reforzando la metáfora del oráculo.
- **Portal místico**: el componente `MysticEyePortal` aplica una animación `float` de 6 segundos con `ease-in-out`, sutil y continua para no distraer.
- **Carrusel de tiradas**: `SpreadCarousel` usa scroll horizontal snapping nativo con soporte touch, sin dependencias adicionales.
- **Botón flotante FAB**: aparece en el diario con entrada suave para invitar a nuevas anotaciones sin interrumpir la lectura.

### Accesibilidad considerada
- Textos alternativos en todas las imágenes con propósito (`alt` descriptivo).
- Contraste de color revisado manualmente para la combinación dorado sobre oscuro.
- Navegación estructurada con landmarks semánticos (`<header>`, `<main>`, `<nav>`).
- Modales con trampa de foco gestionada por React.

---

## Características por sección

### Inicio — Carta del día
La pantalla de inicio presenta la **carta del tarot del día**, seleccionada de forma determinista mediante el hook `useDailyTarotCard` (misma carta todo el día para todos los usuarios, cambia a medianoche). El usuario puede revelar la carta con animación de volteo y acceder a su interpretación completa a través de un modal.

### Cartas — Modos y Tiradas
Página central que integra tres secciones en un único scroll:
- **`SpreadCarousel`** — carrusel interactivo con diferentes tipos de tiradas (3 cartas, Celtic Cross, etc.)
- **`LoreSection`** — acceso al lore de Arcanos Mayores y Menores
- **`BoutiqueSection`** — previsualización de productos con acceso directo a la tienda

### Arcanos Mayores y Arcanos Menores
Páginas de referencia con fichas detalladas de cada arcano: significado, elemento, planeta, numerología y descripción simbólica. Los datos se centralizan en `src/data/arcanos.js`, separando datos de presentación.

### Historial
Registro cronológico de lecturas anteriores. Cada `HistoryCard` muestra fecha, tipo de tirada y cartas consultadas.

### Diario
Diario personal con tres capas de funcionalidad:
- **Fase lunar en tiempo real** calculada astronómicamente sin API externa (`useMoonPhase`)
- **Calendario semanal** con soporte opcional para Google Calendar API; funciona en modo offline
- **Carrusel de lecturas favoritas** y lista de entradas con FAB para nueva entrada

### Boutique
Tienda con carrito de compras, gestión de estado local via Context y tarjetas de producto con hover interactivo.

### Perfil
Dashboard de usuario: avatar, estadísticas de uso (consultas, racha de días, arcano favorito), zona zodiacal y gestión de sesión via `AuthContext`.

### Contacto
Presentación del autor con mapa interactivo embebido (**React Leaflet**), tarjeta de ubicación y enlaces de contacto.

---

## Stack tecnológico

| Categoría             | Tecnología                                                        |
|-----------------------|-------------------------------------------------------------------|
| Framework             | [React 19](https://react.dev/)                                    |
| Bundler               | [Vite](https://vite.dev/) con rolldown-vite (Rust-based)          |
| Enrutamiento          | [React Router DOM v7](https://reactrouter.com/)                   |
| Estilos               | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS             |
| Mapas                 | [React Leaflet v5](https://react-leaflet.js.org/)                 |
| Iconografía           | [Font Awesome](https://fontawesome.com/) (SVG Core + React)       |
| Tipografía            | Cinzel — Google Fonts (estilo serif místico)                      |
| Linting               | [ESLint 9](https://eslint.org/) + React Hooks / React Refresh     |
| Deploy                | [Vercel](https://vercel.com/) con SPA rewrites                    |

---

## Arquitectura de componentes

Los componentes se organizan **por dominio** (feature-based), no por tipo, lo que facilita la navegación del código y el trabajo en equipo:

```
src/
├── assets/          # Imágenes, prototipos y recursos visuales
├── components/
│   ├── contact/     # Mapa, perfil del autor, links de contacto
│   ├── journal/     # Calendario semanal, fases lunares, entradas
│   ├── layout/      # AppHeader, BottomNavigation, CosmicBackground
│   ├── oracle/      # TarotCard, SpreadCarousel, BoutiqueSection, MysticEyePortal
│   └── ui/          # Sistema de diseño: CardModal, GoldLeafButton, StatCard…
├── context/         # AuthContext — estado de autenticación global
├── data/            # Datos estáticos tipados: arcanos, zodiaco, productos
├── hooks/           # Custom hooks desacoplados de la UI
├── pages/           # Páginas-ruta: composición de secciones
└── services/        # authService — capa de acceso a datos/API
```

### Custom Hooks

| Hook                  | Responsabilidad                                                         |
|-----------------------|-------------------------------------------------------------------------|
| `useDailyTarotCard`   | Selecciona la carta del día de forma determinista por fecha             |
| `useMoonPhase`        | Calcula la fase lunar local (ciclo sinódico 29.53 días) o consume API  |
| `useCalendar`         | Gestiona la semana visible, navegación y eventos del calendario         |

---

## Optimización de rendimiento

El bundle se divide en **chunks semánticos** dentro de `vite.config.js` para maximizar el caché del navegador:

```
vendor   →  react + react-dom + react-router-dom
leaflet  →  leaflet + react-leaflet  (cargado solo en /contacto)
icons    →  @fortawesome/*
```

Esto evita que una actualización en la lógica de la app invalide el caché de librerías de terceros que no cambian.

---

## Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/jmgvi/orac.git
cd orac

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

### Variables de entorno (opcionales)

```env
VITE_GOOGLE_CALENDAR_ID=your_calendar_id
VITE_GOOGLE_API_KEY=your_api_key
```

> Sin estas variables el calendario funciona en modo offline con datos locales. La aplicación es completamente funcional sin ninguna variable de entorno.

---

## Autor

**John Vicent** — Diseñador Multimedia & Front End Developer

Especializado en la intersección entre diseño visual e ingeniería front-end. Crea experiencias digitales donde la estética, la funcionalidad y el detalle de interacción trabajan juntos.

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=flat-square&logo=vercel&logoColor=white)](https://johnvicent.es/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/johngonzalezvicent/)

---

*Orac — Donde la tecnología y el misticismo convergen.*
