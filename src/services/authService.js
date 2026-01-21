import usersData from '../data/users.json'

/**
 * Servicio de autenticación simulado
 * Simula llamadas a un backend usando un archivo JSON local
 */

class AuthService {
  constructor() {
    this.users = usersData.users
  }

  /**
   * Simula un login con delay (como si fuera una llamada al servidor)
   * @param {string} email - Email o username del usuario
   * @param {string} password - Contraseña del usuario
   * @returns {Promise} - Promesa con el resultado del login
   */
  async login(email, password) {
    // Simular delay de red (300ms)
    await new Promise(resolve => setTimeout(resolve, 300))

    // Buscar usuario por email o username
    const user = this.users.find(
      u => (u.email === email || u.username === email) && u.password === password
    )

    if (!user) {
      throw new Error('Credenciales inválidas')
    }

    // No devolver la contraseña
    const { password: _, ...userWithoutPassword } = user

    return {
      success: true,
      user: userWithoutPassword,
      token: this.generateToken(user.id), // Token simulado
      message: 'Login exitoso'
    }
  }

  /**
   * Valida las credenciales del usuario
   * @param {string} email - Email o username
   * @param {string} password - Contraseña
   * @returns {boolean} - true si las credenciales son válidas
   */
  validateCredentials(email, password) {
    return this.users.some(
      u => (u.email === email || u.username === email) && u.password === password
    )
  }

  /**
   * Obtiene un usuario por email o username (sin contraseña)
   * @param {string} identifier - Email o username
   * @returns {Object|null} - Usuario sin contraseña o null
   */
  getUserByIdentifier(identifier) {
    const user = this.users.find(
      u => u.email === identifier || u.username === identifier
    )

    if (!user) return null

    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
  }

  /**
   * Genera un token simulado (JWT simplificado)
   * @param {number} userId - ID del usuario
   * @returns {string} - Token generado
   */
  generateToken(userId) {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const payload = btoa(JSON.stringify({ 
      userId, 
      exp: Date.now() + 86400000 // 24 horas
    }))
    const signature = btoa(`signature_${userId}_${Date.now()}`)
    
    return `${header}.${payload}.${signature}`
  }

  /**
   * Verifica si un token es válido (simulado)
   * @param {string} token - Token a verificar
   * @returns {boolean} - true si es válido
   */
  verifyToken(token) {
    if (!token) return false
    
    try {
      const parts = token.split('.')
      if (parts.length !== 3) return false
      
      const payload = JSON.parse(atob(parts[1]))
      return payload.exp > Date.now()
    } catch {
      return false
    }
  }

  /**
   * Obtiene todos los usuarios (sin contraseñas) - Solo para demo
   * @returns {Array} - Lista de usuarios
   */
  getAllUsers() {
    return this.users.map(({ password: _, ...user }) => user)
  }
}

// Exportar una instancia única (Singleton)
const authService = new AuthService()
export default authService
