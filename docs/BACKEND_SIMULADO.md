# 🔐 Backend Simulado - Sistema de Autenticación

## 📋 Descripción

Sistema de autenticación completamente funcional con backend simulado usando archivos JSON locales. Simula llamadas asíncronas a un servidor, validación de credenciales, generación de tokens y persistencia de sesión.

## 📁 Estructura de Archivos

```
src/
├── data/
│   └── users.json              # Base de datos de usuarios simulada
├── services/
│   └── authService.js          # Servicio de autenticación
├── context/
│   └── AuthContext.jsx         # Context con persistencia de sesión
└── components/
    └── ui/
        └── LoginModal.jsx      # Modal integrado con authService
```

## 👥 Usuarios de Prueba

### Usuario Admin
```
Usuario: admin
Email: admin@orac.com
Contraseña: 1234
Rol: admin
Nivel: X
```

### Usuario Místico
```
Usuario: mystic_user
Email: user@orac.com
Contraseña: user123
Rol: user
Nivel: V
```

### Usuario Buscador
```
Usuario: oracle_seeker
Email: seeker@orac.com
Contraseña: oracle2026
Rol: user
Nivel: VII
```

> 💡 **Tip**: Puedes usar tanto el username como el email para iniciar sesión

## 🗄️ Base de Datos Simulada (users.json)

```json
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "email": "admin@orac.com",
      "password": "1234",
      "role": "admin",
      "zodiacSign": "Escorpio",
      "level": "X",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "stats": {
        "dailyReadings": 247,
        "favoriteCard": "El Mago",
        "sharedInsights": 89
      }
    }
  ]
}
```

### Campos de Usuario

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | number | Identificador único |
| `username` | string | Nombre de usuario |
| `email` | string | Correo electrónico |
| `password` | string | Contraseña (simulada) |
| `role` | string | Rol del usuario (admin/user) |
| `zodiacSign` | string | Signo zodiacal |
| `level` | string | Nivel místico (I-X) |
| `avatar` | string | URL del avatar |
| `stats` | object | Estadísticas del usuario |

## 🔧 Servicio de Autenticación (authService.js)

### Características

✅ **Simulación de llamadas asíncronas** (300ms delay)
✅ **Validación de credenciales** (username o email + password)
✅ **Generación de tokens JWT simulados**
✅ **Omisión de contraseñas en respuestas**
✅ **Búsqueda de usuarios por identificador**
✅ **Verificación de tokens**

### Métodos Disponibles

#### `login(email, password)`
```javascript
import authService from './services/authService'

try {
  const response = await authService.login('admin', '1234')
  console.log(response)
  // {
  //   success: true,
  //   user: { id, username, email, role, ... },
  //   token: "eyJhb...",
  //   message: "Login exitoso"
  // }
} catch (error) {
  console.error(error.message) // "Credenciales inválidas"
}
```

#### `validateCredentials(email, password)`
```javascript
const isValid = authService.validateCredentials('admin', '1234')
// true o false
```

#### `getUserByIdentifier(identifier)`
```javascript
const user = authService.getUserByIdentifier('admin')
// Devuelve usuario sin contraseña o null
```

#### `generateToken(userId)`
```javascript
const token = authService.generateToken(1)
// "header.payload.signature" (JWT simulado)
```

#### `verifyToken(token)`
```javascript
const isValid = authService.verifyToken(token)
// true si el token no ha expirado (24h)
```

#### `getAllUsers()`
```javascript
const users = authService.getAllUsers()
// Array de usuarios sin contraseñas
```

## 🔐 Flujo de Autenticación

```
1. Usuario ingresa credenciales (username/email + password)
   ↓
2. LoginModal llama a authService.login()
   ↓
3. Simulación de delay de red (300ms)
   ↓
4. Búsqueda en users.json
   ↓
5. Validación de credenciales
   ↓
6. Si es válido:
   - Genera token JWT simulado
   - Elimina password de la respuesta
   - Retorna { success, user, token, message }
   ↓
7. Si es inválido:
   - Lanza error "Credenciales inválidas"
   ↓
8. LoginModal guarda en storage:
   - localStorage (si "recordarme" está activado)
   - sessionStorage (si no)
   ↓
9. AuthContext actualiza el estado global
   ↓
10. UI se actualiza mostrando datos del usuario
```

## 💾 Persistencia de Sesión

### localStorage (Recordarme)
```javascript
localStorage.setItem('orac_user', JSON.stringify(userData))
localStorage.setItem('orac_token', token)
```

### sessionStorage (Sesión temporal)
```javascript
sessionStorage.setItem('orac_user', JSON.stringify(userData))
sessionStorage.setItem('orac_token', token)
```

### Restauración Automática
El `AuthContext` restaura automáticamente la sesión al cargar la app:

```javascript
useEffect(() => {
  // 1. Intenta localStorage
  // 2. Si no, intenta sessionStorage
  // 3. Si encuentra datos válidos, restaura el usuario
}, [])
```

## 🎨 Integración en LoginModal

```javascript
import authService from '../../services/authService'

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  
  try {
    const response = await authService.login(
      formData.email, 
      formData.password
    )
    
    const userData = {
      ...response.user,
      token: response.token,
      rememberMe: formData.rememberMe,
      loginTime: new Date().toISOString()
    }
    
    // Guardar según preferencia
    if (formData.rememberMe) {
      localStorage.setItem('orac_user', JSON.stringify(userData))
    } else {
      sessionStorage.setItem('orac_user', JSON.stringify(userData))
    }
    
    onLogin(userData)
    onClose()
    
  } catch (error) {
    setErrors({ general: error.message })
  } finally {
    setIsLoading(false)
  }
}
```

## 🔍 Estados del LoginModal

### Loading State
```javascript
const [isLoading, setIsLoading] = useState(false)

// Mientras está cargando:
// - Inputs deshabilitados
// - Botón con spinner
// - Mensaje "Verificando..."
```

### Error State
```javascript
const [errors, setErrors] = useState({})

// Errores posibles:
errors.general  // Error de autenticación
errors.email    // Campo email vacío
errors.password // Campo password vacío
```

### Success State
```javascript
// Login exitoso:
// 1. Usuario guardado en storage
// 2. Modal cerrado
// 3. Estado global actualizado
// 4. Redirección/actualización de UI
```

## 📊 Datos Dinámicos en Perfil

```javascript
// Estadísticas del usuario logueado
const stats = user ? [
  {
    icon: 'style',
    title: 'Lecturas Diarias',
    value: user.stats.dailyReadings.toString()
  },
  {
    icon: 'auto_stories',
    title: 'Baraja Favorita',
    value: user.stats.favoriteCard
  },
  {
    icon: 'visibility',
    title: 'Insights Compartidos',
    value: user.stats.sharedInsights.toString()
  }
] : defaultStats
```

## 🚀 Características Implementadas

### ✅ Autenticación
- [x] Login con username o email
- [x] Validación de credenciales
- [x] Generación de tokens
- [x] Manejo de errores
- [x] Loading states

### ✅ Persistencia
- [x] localStorage (recordarme)
- [x] sessionStorage (sesión temporal)
- [x] Restauración automática al cargar
- [x] Limpieza al cerrar sesión

### ✅ Seguridad (Simulada)
- [x] Contraseñas no se devuelven en respuestas
- [x] Tokens con expiración (24h)
- [x] Validación de tokens
- [x] Delay simulado de red

### ✅ UX/UI
- [x] Indicador de carga
- [x] Mensajes de error claros
- [x] Credenciales de prueba visibles
- [x] Datos dinámicos del usuario
- [x] Badge de rol admin
- [x] Información completa en perfil

## 🔄 Migración a Backend Real

Cuando quieras migrar a un backend real, solo necesitas:

### 1. Actualizar authService.js
```javascript
async login(email, password) {
  const response = await fetch('https://tu-api.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  
  if (!response.ok) throw new Error('Credenciales inválidas')
  
  return await response.json()
}
```

### 2. Agregar interceptores
```javascript
// Para incluir token en todas las peticiones
fetch(url, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
```

### 3. Implementar refresh tokens
```javascript
// Para renovar tokens expirados automáticamente
```

## 🧪 Testing

### Probar Login Exitoso
```javascript
// Usuario: admin
// Contraseña: 1234
// Resultado: Login exitoso, datos del admin cargados
```

### Probar Login Fallido
```javascript
// Usuario: admin
// Contraseña: incorrecta
// Resultado: Error "Credenciales inválidas"
```

### Probar Persistencia
```javascript
// 1. Login con "recordarme"
// 2. Cerrar navegador
// 3. Abrir de nuevo
// Resultado: Sesión restaurada automáticamente
```

### Probar Logout
```javascript
// 1. Login exitoso
// 2. Click en "Cerrar sesión"
// Resultado: Storage limpiado, estado reseteado
```

## 📝 Notas Importantes

### ⚠️ Seguridad
- Este es un sistema de **demostración**
- Las contraseñas están en **texto plano** en JSON
- Los tokens son **simulados**, no criptográficamente seguros
- **NO usar en producción** sin implementar seguridad real

### ⚡ Performance
- Delay de 300ms simula latencia de red
- Sin límite de intentos de login (agregar rate limiting en producción)
- Sin validación de fuerza de contraseña

### 🔮 Próximas Mejoras
- [ ] Encriptación de contraseñas (bcrypt)
- [ ] Validación de email real
- [ ] Rate limiting
- [ ] Recuperación de contraseña
- [ ] Verificación por email
- [ ] 2FA (autenticación de dos factores)
- [ ] OAuth (Google, GitHub)
- [ ] Refresh tokens
- [ ] Logs de actividad

## 📚 Recursos

- [JWT.io](https://jwt.io) - Información sobre JWT
- [LocalStorage vs SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [React Context API](https://react.dev/reference/react/useContext)

---

**🎭 Sistema de autenticación místico para ORAC - Simulación completa de backend**
