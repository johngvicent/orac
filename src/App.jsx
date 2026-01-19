import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Routes>
      {/* Ruta principal de Orac */}
      <Route path="/" element={<Inicio />} />
      
      {/* Otras rutas */}
      <Route path="/contacto" element={<Contacto />} />
      
      {/* Ruta para error 404 */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-[#05070A] text-slate-200">
          <h1 className="text-center text-3xl font-[Cinzel] tracking-widest">404 - Página no encontrada</h1>
        </div>
      } />
    </Routes>
  )
}

export default App
