/**
 * modosData.js
 * Datos para la página de Modos (Spreads & Knowledge Hub)
 */

export const spreadsData = [
  {
    id: 'oracle',
    icon: 'rectangle',
    title: 'El Oráculo',
    description: 'Una sola carta centrada en una pregunta o intención específica.'
  },
  {
    id: 'celtic-cross',
    icon: 'grid_view',
    title: 'Cruz Celta',
    description: 'Diez cartas para una profunda visión del pasado, presente y trayectoria futura.'
  },
  {
    id: 'three-card',
    icon: 'view_column',
    title: 'Triskel',
    description: 'La clásica tirada de Mente, Cuerpo y Espíritu para claridad diaria.'
  },
  {
    id: 'horseshoe',
    icon: 'nature',
    title: 'Herradura',
    description: 'Siete cartas que revelan el camino por delante con claridad y sabiduría.'
  }
]

export const loreData = [
  {
    id: 'major-arcana',
    icon: 'auto_awesome',
    title: 'Los Arcanos Mayores',
    description: "Los 22 pilares del Viaje del Loco."
  },
  {
    id: 'minor-arcana',
    icon: 'layers',
    title: 'Los Arcanos Menores',
    description: 'Fuerzas elementales: Bastos, Copas, Espadas, Oros.'
  }
]

export const boutiqueProducts = [
  {
    id: 'midnight-deck',
    image: '/assets/store/tattoo-tarot-b.jpg',
    title: 'Tattoo Tarot Deck',
    subtitle: 'Estética-Urbana 78 cartas',
    price: 79.99
  },
  {
    id: 'obsidian-crystal',
    image: '/assets/store/alch-tarot-a.jpg', 
    title: 'Tarot Alquímico',
    subtitle: 'Ilustraciones Místicas 78 cartas',
    price: 59.99
  },
  {
    id: 'velvet-cloth',
    image: '/assets/store/libro-astrology-a.jpg',
    title: 'Libro de Astrología',
    subtitle: 'Librería Akelarre 4ta Edición',
    price: 45.5
  },
  {
    id: 'incense-set',
    image: '/assets/store/strore-entrance.jpg', // Sin imagen, usará el placeholder
    title: 'Explora Nuestra Boutique',
    subtitle: 'Nuestros productos detallados',
    price: null // Precio no disponible
  }
]
