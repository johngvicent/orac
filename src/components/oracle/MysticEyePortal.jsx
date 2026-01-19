import React from 'react'

function MysticEyePortal() {
  return (
    <div className="animate-[float_6s_ease-in-out_infinite]">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Glow místico */}
        <div 
          className="absolute inset-0 rounded-full bg-blue-900/10 blur-3xl"
          style={{
            boxShadow: '0 0 60px 10px rgba(74, 144, 226, 0.15)'
          }}
        ></div>

        {/* Contenedor principal del ojo */}
        <div className="relative z-20 w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/20 bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(27,36,48,0.8)]">
          {/* Imagen del ojo */}
          <img
            alt="Mystical Eye Portal"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMi5WEDu2HygCsEkn2q2RDYTIuKN_i06dmSst99eAizoTgm-qLM8pbSGt3TW77AI1uP3UOF6xi75mUv9VTMJU_kJRY6CkIFg05uwEkJcHu8mIDDAE0mwCgVN-KJ8Hf9I7-z8yBnsFZli45B8V4j9hO1zkBOB3PObpSDZu3YW6e60mdgtUY3ewThfJ0B7q2AwuRHXsSEz252BDFBSresCRbkxBcacu7tXTNfIR9HNeLL9JAhUte9k3QgtJ-W8BfS2FuSuQqgkDPC64"
          />

          {/* Pupila central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#0A0E14] border border-[#D4AF37]/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]"></div>
            </div>
          </div>

          {/* Anillos internos decorativos */}
          <div className="absolute inset-0 border-[0.5px] border-[#D4AF37]/10 rounded-full m-4"></div>
          <div className="absolute inset-0 border-[0.5px] border-[#D4AF37]/10 rounded-full m-8"></div>
        </div>

        {/* SVG de círculos externos */}
        <svg
          className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none"
          viewBox="0 0 200 200"
        >
          <circle
            className="text-[#D4AF37]/30"
            cx="100"
            cy="100"
            fill="none"
            r="85"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            className="text-[#D4AF37]/20"
            cx="100"
            cy="100"
            fill="none"
            r="95"
            stroke="currentColor"
            strokeDasharray="2,4"
            strokeWidth="0.2"
          />
          {/* Puntos cardinales */}
          <circle className="text-[#D4AF37]" cx="100" cy="15" fill="currentColor" r="1.5" />
          <circle className="text-[#D4AF37]" cx="100" cy="185" fill="currentColor" r="1.5" />
          <circle className="text-[#D4AF37]" cx="15" cy="100" fill="currentColor" r="1.5" />
          <circle className="text-[#D4AF37]" cx="185" cy="100" fill="currentColor" r="1.5" />
        </svg>
      </div>

      {/* Estilo de animación flotante */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default MysticEyePortal
