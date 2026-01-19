import React from 'react'

function Contacto() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Contacta con nosotros
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 h-32 resize-none"
                placeholder="Tu mensaje aquí..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">📍 Dirección</h3>
            <p>Calle Principal 123, Ciudad, País</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">📱 Teléfono</h3>
            <p>+34 123 456 789</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">✉️ Email</h3>
            <p>info@audiotech.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
