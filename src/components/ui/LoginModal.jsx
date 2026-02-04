import { useState } from 'react'
import authService from '../../services/authService'

function LoginModal({ isOpen, onClose, onLogin }) {
    // Estado unificado para todos los campos del formulario
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })

    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    // Función universal para manejar cambios en cualquier input
    const handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setFormData(values => ({ ...values, [name]: value }))

        // Limpiar error del campo cuando el usuario empieza a escribir
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    // Validación básica de formulario
    const validateForm = () => {
        const newErrors = {}

        if (!formData.email.trim()) {
            newErrors.email = 'El email o usuario es requerido'
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault() // Prevenir recarga de página

        if (!validateForm()) return

        setIsLoading(true)
        setErrors({})

        try {
            // Intentar login con el servicio de autenticación
            const response = await authService.login(formData.email, formData.password)

            console.log('Login exitoso:', response)

            // Preparar datos del usuario con token
            const userData = {
                ...response.user,
                token: response.token,
                rememberMe: formData.rememberMe,
                loginTime: new Date().toISOString()
            }

            // Guardar en localStorage si "recordarme" está activado
            if (formData.rememberMe) {
                localStorage.setItem('orac_user', JSON.stringify(userData))
                localStorage.setItem('orac_token', response.token)
            } else {
                sessionStorage.setItem('orac_user', JSON.stringify(userData))
                sessionStorage.setItem('orac_token', response.token)
            }

            // Llamar al callback del padre
            if (onLogin) {
                onLogin(userData)
            }

            // Limpiar formulario y cerrar modal
            setFormData({ email: '', password: '', rememberMe: false })
            setErrors({})
            onClose()

        } catch (error) {
            console.error('Error en login:', error)
            setErrors({
                general: error.message || 'Usuario o contraseña incorrectos'
            })
        } finally {
            setIsLoading(false)
        }
    }

    // Si el modal no está abierto, no renderizar nada
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay con blur */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-md">
                {/* Decorative corner borders */}
                <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl pointer-events-none"></div>
                <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl pointer-events-none"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl pointer-events-none"></div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl pointer-events-none"></div>

                {/* Modal Content */}
                <div className="bg-linear-to-br from-midnight via-stellar to-background-dark border border-primary/20 rounded-lg shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="relative px-6 py-5 border-b border-primary/20">
                        <div className="flex items-center justify-center">
                            <span className="material-icons text-primary text-3xl mr-3">account_circle</span>
                            <h2 className="text-2xl font-display text-primary tracking-wider">
                                Iniciar Sesión
                            </h2>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors duration-300"
                            aria-label="Cerrar"
                        >
                            <span className="material-icons">close</span>
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
                        {/* Error General */}
                        {errors.general && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-start gap-2">
                                <span className="material-icons text-red-400 text-xl">error</span>
                                <div className="flex-1">
                                    <p className="text-red-400 text-sm font-medium">Error de autenticación</p>
                                    <p className="text-red-300 text-xs mt-1">{errors.general}</p>
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-serif text-white tracking-wide"
                            >
                                Email o Usuario
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-white text-xl">
                                    person
                                </span>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    className={`w-full bg-background-dark/50 border ${errors.email ? 'border-red-500' : 'border-primary/20'
                                        } rounded-lg px-10 py-3 text-white placeholder-slate-500 
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300`}
                                    placeholder="admin o admin@orac.com"
                                    autoComplete="username"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-1 flex items-center">
                                    <span className="material-icons text-sm mr-1">error</span>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-serif text-white tracking-wide"
                            >
                                Contraseña
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-white text-xl">
                                    lock
                                </span>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    className={`w-full bg-background-dark/50 border ${errors.password ? 'border-red-500' : 'border-primary/20'
                                        } rounded-lg px-10 py-3 text-white placeholder-slate-500 
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300`}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-xs mt-1 flex items-center">
                                    <span className="material-icons text-sm mr-1">error</span>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-primary bg-background-dark border-primary/30 rounded 
                  focus:ring-2 focus:ring-primary/50 cursor-pointer"
                                />
                                <span className="ml-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                    Recordarme
                                </span>
                            </label>

                            <button
                                type="button"
                                className="text-sm text-primary/70 hover:text-primary transition-colors"
                            >
                                ¿Olvidaste tu contraseña?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-linear-to-r from-primary to-primary/80 
              hover:from-primary/90 hover:to-primary/70 
              disabled:from-primary/50 disabled:to-primary/40
              disabled:cursor-not-allowed
              text-background-dark font-display font-semibold 
              py-3 rounded-lg tracking-wider uppercase
              transition-all duration-300 
              shadow-lg hover:shadow-primary/50
              flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <span className="material-icons animate-spin">autorenew</span>
                                    <span>Verificando...</span>
                                </>
                            ) : (
                                <>
                                    <span className="material-icons">login</span>
                                    <span>Entrar</span>
                                </>
                            )}
                        </button>

                        {/* Credenciales de prueba */}
                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
                            <p className="text-xs text-slate-400 text-center mb-2 font-serif">
                                <span className="material-icons text-xs align-middle mr-1">info</span>
                                Credenciales de prueba
                            </p>
                            <div className="text-xs text-slate-300 space-y-1 font-mono text-center">
                                <p>👤 <strong>Usuario:</strong> admin</p>
                                <p>🔑 <strong>Contraseña:</strong> 1234</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-primary/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-stellar text-slate-500">o continúa con</span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-2.5 px-4 
                border border-primary/20 rounded-lg text-slate-300 
                hover:bg-primary/10 hover:border-primary/40 
                transition-all duration-300"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="text-sm">Google</span>
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-2.5 px-4 
                border border-primary/20 rounded-lg text-slate-300 
                hover:bg-primary/10 hover:border-primary/40 
                transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                <span className="text-sm">GitHub</span>
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-slate-400 mt-4">
                            ¿No tienes cuenta?{' '}
                            <button
                                type="button"
                                className="text-primary hover:text-primary/80 font-semibold transition-colors"
                            >
                                Regístrate aquí
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
