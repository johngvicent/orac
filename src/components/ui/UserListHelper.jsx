import { useState } from 'react'
import authService from '../../services/authService'

/**
 * Componente de ayuda para mostrar usuarios disponibles
 * Solo para desarrollo/demostración
 */
function UserListHelper() {
  const [showUsers, setShowUsers] = useState(false)
  const users = authService.getAllUsers()

  if (!showUsers) {
    return (
      <button
        onClick={() => setShowUsers(true)}
        className="fixed bottom-24 right-6 z-50 px-3 py-2 
        bg-primary/20 hover:bg-primary/30 border border-primary/40 
        rounded-full text-primary text-xs font-display 
        transition-all duration-300 shadow-lg"
      >
        <span className="material-icons text-sm align-middle mr-1">help</span>
        Ver usuarios
      </button>
    )
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 max-h-96 overflow-y-auto
                    bg-linear-to-br from-midnight via-stellar to-background-dark 
                    border border-primary/20 rounded-lg shadow-2xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-primary font-display text-sm tracking-wider">
          USUARIOS DE PRUEBA
        </h3>
        <button
          onClick={() => setShowUsers(false)}
          className="text-slate-400 hover:text-primary transition-colors"
        >
          <span className="material-icons text-sm">close</span>
        </button>
      </div>

      {/* Lista de usuarios */}
      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-background-dark/50 border border-primary/10 rounded-lg p-3"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="text-slate-200 font-serif text-sm font-medium">
                  {user.username}
                </p>
                <p className="text-slate-400 text-xs">{user.email}</p>
              </div>
              {user.role === 'admin' && (
                <span className="px-2 py-0.5 bg-primary/20 border border-primary/30 
                               rounded text-primary text-xs font-display">
                  ADMIN
                </span>
              )}
            </div>

            <div className="bg-primary/5 rounded px-2 py-1.5 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="material-icons text-xs text-primary">lock</span>
                <span>Contraseña: <strong className="text-primary">
                  {user.id === 1 ? '1234' : user.id === 2 ? 'user123' : 'oracle2026'}
                </strong></span>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="material-icons text-xs">nights_stay</span>
                {user.zodiacSign}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons text-xs">stars</span>
                Nivel {user.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Nota */}
      <div className="mt-4 pt-3 border-t border-primary/10">
        <p className="text-xs text-slate-400 text-center">
          <span className="material-icons text-xs align-middle mr-1">info</span>
          Puedes usar username o email para login
        </p>
      </div>
    </div>
  )
}

export default UserListHelper
