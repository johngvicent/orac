import React from 'react'
import ReactDOM from 'react-dom'

function CardModal({ children, onClose, isOpen }) {
  // Si no está abierto, no renderizamos nada
  if (!isOpen) return null

  // Buscamos el elemento destino que creamos en el HTML
  const portalDestination = document.getElementById('modal-root')

  // Si no existe el destino, no renderizamos
  if (!portalDestination) return null

  // Usamos createPortal para "teletransportar" el modal
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center py-20 px-4 animate-[fadeIn_0.3s_ease-in-out]"
      style={{
        backgroundColor: 'rgba(5, 7, 10, 0.95)',
        backdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
    >
      {/* Contenedor de la carta */}
      <div
        className="relative max-w-md w-full animate-[scaleIn_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click en la carta
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-[#D4AF37] hover:text-[#FCF6BA] transition-colors group"
        >
          <span className="material-icons-outlined text-3xl">close</span>
        </button>

        {/* Glow místico alrededor de la carta */}
        <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/20 blur-3xl animate-pulse"></div>

        {/* Contenido del modal */}
        <div className="relative bg-linear-to-b from-[#1B2430] to-[#0A0E14] rounded-2xl border-2 border-[#D4AF37]/30 shadow-2xl overflow-y-auto max-h-[90vh]">
          {children}
        </div>
      </div>

      {/* Estilos de animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>,
    portalDestination
  )
}

export default CardModal
