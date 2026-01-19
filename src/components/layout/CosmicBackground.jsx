import React from 'react'

function CosmicBackground() {
  return (
    <>
      {/* Fondo cósmico con gradiente radial */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,#1B2430_0%,#05070A_100%)]">
        {/* Overlay de geometría sagrada */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAxF1VOzdd3ocoR2utmJxuD08h3jIz0IwiQpEDNUqHpJ1TX1KQ09hWtLmPH2jSNWQ9DaTFSNks9Eh-cKqicDhLXkhzdee0LxTBcAKLI6CgC7edLab0Yhk6Tdj7J0je2uRvlyUNyFBb9CpNGXyjpU95-GOmFCqvYhZM5L5ib0McpY884DwqUcKqoaJezDDl4J9KbcZAuRzn1I_UzjzEfar7sqsqCL_R7T3NL-if0jiOKPIbncSlq0Q_u8Hztsmmqikg-CUwCaXYdD6Q)'
          }}
        ></div>

        {/* SVG de geometría sagrada */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <circle 
            className="stroke-[#D4AF37]/20 fill-none" 
            cx="50" 
            cy="40" 
            r="30" 
            strokeWidth="0.5"
          />
          <circle 
            className="stroke-[#D4AF37]/20 fill-none" 
            cx="50" 
            cy="40" 
            r="20" 
            strokeWidth="0.5"
          />
          <path 
            className="stroke-[#D4AF37]/20 fill-none" 
            d="M50 5 L50 75 M15 40 L85 40" 
            strokeWidth="0.5"
          />
          <polygon 
            className="stroke-[#D4AF37]/20 fill-none" 
            points="50,10 85,40 50,70 15,40" 
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Esquinas decorativas */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t border-l border-[#D4AF37]/10 rounded-tl-3xl pointer-events-none mt-10 ml-4"></div>
      <div className="fixed top-0 right-0 w-32 h-32 border-t border-r border-[#D4AF37]/10 rounded-tr-3xl pointer-events-none mt-10 mr-4"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 border-b border-l border-[#D4AF37]/10 rounded-bl-3xl pointer-events-none mb-24 ml-4"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b border-r border-[#D4AF37]/10 rounded-br-3xl pointer-events-none mb-24 mr-4"></div>
    </>
  )
}

export default CosmicBackground
