# 🔐 Sistema de Autenticación - ORAC

## Descripción General

Este sistema implementa un **formulario de login modal** siguiendo las mejores prácticas de React con componentes controlados, gestión de estado mediante Context API y estilos místicos con Tailwind CSS.

## 📁 Estructura de Archivos

```
src/
├── context/
│   └── AuthContext.jsx         # Contexto de autenticación global
├── components/
│   ├── ui/
│   │   └── LoginModal.jsx      # Componente modal de login
│   └── layout/
│       └── AppHeader.jsx       # Header con botón de login
├── pages/
│   └── Perfil.jsx              # Página de perfil con integración
└── App.jsx                     # Integración global del modal
```

## 🎯 Características Principales

### ✅ Componentes Controlados
- **Estado unificado**: Un solo objeto `formData` maneja todos los campos
- **Función universal**: `handleChange()` gestiona todos los inputs (text, email, password, checkbox)
- **Validación en tiempo real**: Los errores se limpian al escribir

### ✅ Context API para Estado Global
- **AuthContext**: Proporciona estado de usuario y funciones de autenticación a toda la app
- **useAuth Hook**: Hook personalizado para acceder al contexto fácilmente
- **Estado compartido**: El login persiste entre diferentes páginas

### ✅ Validación de Formulario
- Email válido (formato `usuario@dominio.com`)
- Contraseña mínima de 6 caracteres
- Mensajes de error descriptivos
- Prevención del comportamiento por defecto del formulario

### ✅ UX/UI Místico
- Diseño coherente con la temática de ORAC
- Animaciones suaves y transiciones
- Efectos de hover y focus states
- Esquinas decorativas con bordes dorados
- Backdrop blur en el overlay
- Iconos de Material Icons

## 🔧 Implementación

### 1. Contexto de Autenticación

```jsx
// context/AuthContext.jsx
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const login = (userData) => {
    setUser(userData)
    setIsLoginModalOpen(false)
  }

  const logout = () => setUser(null)
  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  return (
    <AuthContext.Provider value={{
      user,
      isLoginModalOpen,
      login,
      logout,
      openLoginModal,
      closeLoginModal,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
```

### 2. Componente LoginModal

**Características del formulario:**

```jsx
// Estado unificado para todos los campos
const [formData, setFormData] = useState({
  email: '',
  password: '',
  rememberMe: false
})

// Función universal para manejar cambios
const handleChange = (e) => {
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name
  setFormData(values => ({ ...values, [name]: value }))
}
```

**Campos del formulario:**
- ✉️ Email (input type="email")
- 🔒 Password (input type="password")
- ☑️ Remember Me (checkbox)

**Validaciones:**
```jsx
const validateForm = () => {
  const newErrors = {}
  
  if (!formData.email.trim()) {
    newErrors.email = 'El email es requerido'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'El email no es válido'
  }
  
  if (!formData.password) {
    newErrors.password = 'La contraseña es requerida'
  } else if (formData.password.length < 6) {
    newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
  }
  
  return Object.keys(newErrors).length === 0
}
```

### 3. Integración en la App

```jsx
// main.jsx - Envolver la app con AuthProvider
<BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>

// App.jsx - Modal global
<LoginModal 
  isOpen={isLoginModalOpen}
  onClose={closeLoginModal}
  onLogin={login}
/>
```

## 🚀 Uso

### Abrir el modal de login

**Desde el Header:**
```jsx
import { useAuth } from '../context/AuthContext'

const { openLoginModal } = useAuth()

<button onClick={openLoginModal}>
  Iniciar Sesión
</button>
```

**Desde la página de Perfil:**
```jsx
const { user, logout, openLoginModal } = useAuth()

{user ? (
  <div>
    <p>Bienvenido {user.email}</p>
    <button onClick={logout}>Cerrar sesión</button>
  </div>
) : (
  <button onClick={openLoginModal}>
    Iniciar Sesión
  </button>
)}
```

### Verificar autenticación

```jsx
const { isAuthenticated, user } = useAuth()

if (isAuthenticated) {
  console.log('Usuario autenticado:', user.email)
}
```

## 🎨 Estilos y Temas

### Colores de Tailwind

```javascript
// tailwind.config.js
colors: {
  primary: "#D4AF37",           // Dorado metálico
  "background-light": "#F5F5F0", // Fondo claro
  "background-dark": "#05070A",  // Fondo oscuro
  midnight: "#0A0E14",           // Azul medianoche
  stellar: "#1B2430"             // Azul estelar
}
```

### Clases clave del modal

```jsx
// Overlay con blur
className="fixed inset-0 bg-black/70 backdrop-blur-sm"

// Contenedor del modal con gradiente
className="bg-gradient-to-br from-midnight via-stellar to-background-dark 
           border border-primary/20 rounded-lg shadow-2xl"

// Inputs con efecto focus
className="bg-background-dark/50 border border-primary/20 rounded-lg
           focus:border-primary focus:ring-1 focus:ring-primary/50"

// Botón submit con gradiente dorado
className="bg-gradient-to-r from-primary to-primary/80 
           hover:from-primary/90 hover:to-primary/70
           shadow-lg hover:shadow-primary/50"
```

## 📋 Buenas Prácticas Implementadas

### ✅ Componentes Controlados
- El estado de React es la única fuente de verdad
- Cada input tiene `value` y `onChange`
- No hay valores `null` en el estado inicial

### ✅ Propiedades Computadas
- Uso de `[name]: value` para actualizar dinámicamente el estado
- Un solo handler para múltiples inputs

### ✅ Prevención del Comportamiento por Defecto
```jsx
const handleSubmit = (e) => {
  e.preventDefault() // ¡Esencial!
  // ... lógica de validación y envío
}
```

### ✅ Validación
- Validación antes del envío
- Mensajes de error claros
- Limpieza de errores al escribir

### ✅ Accesibilidad
- Labels con `htmlFor`
- Atributos `aria-label` en botones icono
- Autocomplete en inputs (`email`, `current-password`)
- Focus states visibles

## 🔄 Flujo de Autenticación

```
1. Usuario hace clic en "Iniciar Sesión"
   ↓
2. Se abre el LoginModal (isLoginModalOpen = true)
   ↓
3. Usuario completa el formulario
   ↓
4. handleChange actualiza formData en cada tecla
   ↓
5. Usuario hace submit
   ↓
6. validateForm verifica los datos
   ↓
7. Si es válido: login(userData) se ejecuta
   ↓
8. AuthContext actualiza el estado global
   ↓
9. Modal se cierra automáticamente
   ↓
10. La UI se actualiza mostrando el usuario logueado
```

## 🧪 Ejemplo de Uso Completo

```jsx
import { useAuth } from '../context/AuthContext'

function MiComponente() {
  const { 
    user, 
    isAuthenticated,
    login,
    logout,
    openLoginModal,
    closeLoginModal 
  } = useAuth()

  const handleLoginSuccess = (userData) => {
    console.log('Login exitoso:', userData)
    // Aquí puedes hacer llamadas a API, guardar tokens, etc.
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Bienvenido, {user.email}</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <button onClick={openLoginModal}>
          Iniciar Sesión
        </button>
      )}
    </div>
  )
}
```

## 🚨 Notas Importantes

1. **Seguridad**: Este es un sistema de autenticación frontend. En producción, debes:
   - Implementar autenticación real con backend
   - Usar tokens JWT o sesiones
   - Encriptar contraseñas
   - Implementar HTTPS

2. **Persistencia**: El estado actual se pierde al recargar. Para persistir:
   - Usar localStorage/sessionStorage
   - Implementar refresh tokens
   - Guardar estado en base de datos

3. **Validación**: Agregar más validaciones según necesites:
   - Fuerza de contraseña
   - Dominios de email permitidos
   - Captcha
   - Rate limiting

## 🎓 Conceptos de React Utilizados

- ✅ Hooks: `useState`, `useContext`, `createContext`
- ✅ Context API para estado global
- ✅ Componentes Controlados
- ✅ Propiedades Computadas (ES6)
- ✅ Conditional Rendering
- ✅ Event Handling
- ✅ Form Validation
- ✅ Props y callbacks

---

**Desarrollado con ❤️ siguiendo las mejores prácticas de React**
