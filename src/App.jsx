import { Routes, Route } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Inicio from './pages/Inicio'
import Historial from './pages/Historial'
import Diario from './pages/Diario'
import Modos from './pages/Modos'
import Contacto from './pages/Contacto'
import Perfil from './pages/Perfil'
import ArcanosMayores from './pages/ArcanosMayores'
import ArcanosMenores from './pages/ArcanosMenores'
import Boutique from './pages/Boutique'
import LoginModal from './components/ui/LoginModal'

function App() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth()

  return (
    <>
      <Routes>
        {/* Ruta principal de Orac */}
        <Route path="/" element={<Inicio />} />

        {/* Navegación inferior */}
        <Route path="/cartas" element={<Modos />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/diario" element={<Diario />} />
        
        {/* Otras rutas */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* Lore de arcanos */}
        <Route path="/arcanos-mayores" element={<ArcanosMayores />} />
        <Route path="/arcanos-menores" element={<ArcanosMenores />} />
        
        {/* Boutique */}
        <Route path="/boutique" element={<Boutique />} />
        
        {/* Ruta para error 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-[#05070A] text-slate-200">
            <h1 className="text-center text-3xl font-[Cinzel] tracking-widest">404 - Página no encontrada</h1>
          </div>
        } />
      </Routes>

      {/* Modal de Login Global */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={login}
      />
    </>
  )
}

export default App
