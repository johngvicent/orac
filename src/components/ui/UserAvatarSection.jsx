import React from 'react'
import PropTypes from 'prop-types'
import moonAvatar from '../../assets/ui/moon-avatar.png'

function UserAvatarSection({ user = null, onLogin, onLogout, avatarUrl = moonAvatar }) {
  const isLoggedIn = Boolean(user)
  const displayName = isLoggedIn ? user?.username : 'Iniciar sesión'
  const displayLevel = isLoggedIn ? user?.level : null
  const resolvedAvatarUrl = isLoggedIn ? user?.avatarUrl || avatarUrl : avatarUrl

  const goldGradientStyle = {
    background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  return (
    <div className="flex flex-col items-center mt-4 mb-8">
      {/* Avatar con efecto glow */}
      <div className="relative w-32 h-32 mb-6">
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" 
             style={{ boxShadow: '0 0 40px 5px rgba(212, 175, 55, 0.2)' }}>
        </div>
        <div className="relative w-full h-full rounded-full border border-primary/40 p-1 bg-midnight overflow-hidden">
          <img 
            alt="User Avatar" 
            className="w-full h-full rounded-full object-cover" 
            src={resolvedAvatarUrl}
          />
        </div>
      </div>

      {/* Nombre/Login con gradiente dorado (actúa como Login/Logout) */}
      <div className="flex items-center justify-center gap-3 mb-1">
        {isLoggedIn ? (
          <>
            <h2
              className="font-display text-2xl tracking-widest uppercase"
              style={goldGradientStyle}
            >
              {displayName}
            </h2>
            <button
              type="button"
              onClick={() => onLogout?.()}
              className="rounded-full border border-primary/30 bg-midnight/30 px-3 py-2 transition-all duration-300 hover:border-primary/60 hover:bg-stellar/40"
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
            >
              <span className="material-icons text-[18px]" style={goldGradientStyle}>logout</span>
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => onLogin?.()}
            className="font-display text-2xl tracking-widest uppercase transition-opacity duration-300 hover:opacity-90"
            style={goldGradientStyle}
          >
            {displayName}
          </button>
        )}
      </div>

      {/* Nivel espiritual */}
      {isLoggedIn ? (
        <p className="text-primary/60 font-serif italic text-lg tracking-wide">
          Nivel Espiritual {displayLevel}
        </p>
      ) : (
        <p className="text-primary/60 font-serif italic text-base tracking-wide text-center max-w-xs">
          Accede para guardar tu progreso y estadísticas
        </p>
      )}
    </div>
  )
}

UserAvatarSection.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zodiacSign: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  avatarUrl: PropTypes.string
}

export default UserAvatarSection
