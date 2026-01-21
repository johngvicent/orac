import { createContext, useContext, useState, useEffect } from 'react'

// Crear el contexto de autenticación
const AuthContext = createContext(null)

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}

// Proveedor del contexto de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Restaurar sesión al cargar la app
  useEffect(() => {
    const restoreSession = () => {
      try {
        // Intentar restaurar de localStorage primero (recordarme)
        const savedUser = localStorage.getItem('orac_user')
        const savedToken = localStorage.getItem('orac_token')
        
        if (savedUser && savedToken) {
          const userData = JSON.parse(savedUser)
          setUser(userData)
          console.log('Sesión restaurada desde localStorage:', userData.username)
          return
        }

        // Si no, intentar restaurar de sessionStorage
        const sessionUser = sessionStorage.getItem('orac_user')
        const sessionToken = sessionStorage.getItem('orac_token')
        
        if (sessionUser && sessionToken) {
          const userData = JSON.parse(sessionUser)
          setUser(userData)
          console.log('Sesión restaurada desde sessionStorage:', userData.username)
        }
      } catch (error) {
        console.error('Error al restaurar sesión:', error)
        // Limpiar datos corruptos
        localStorage.removeItem('orac_user')
        localStorage.removeItem('orac_token')
        sessionStorage.removeItem('orac_user')
        sessionStorage.removeItem('orac_token')
      } finally {
        setIsLoading(false)
      }
    }

    restoreSession()
  }, [])

  const login = (userData) => {
    setUser(userData)
    setIsLoginModalOpen(false)
  }

  const logout = () => {
    setUser(null)
    // Limpiar storage
    localStorage.removeItem('orac_user')
    localStorage.removeItem('orac_token')
    sessionStorage.removeItem('orac_user')
    sessionStorage.removeItem('orac_token')
    console.log('Sesión cerrada')
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const value = {
    user,
    isLoginModalOpen,
    isLoading,
    login,
    logout,
    openLoginModal,
    closeLoginModal,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
