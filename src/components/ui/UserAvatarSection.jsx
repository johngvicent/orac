import React from 'react'

function UserAvatarSection({ 
  avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCeWyUKLuimLS5lPqIfUCQ18YEN8_RBIrQibef68XMPPcIPo02opwynGKCdilvCD9lU_oY-O23_bwuDHOGXdmNo1GqVZ8tvGRGy5BCKNpqHtWVqGU2w2GTZe6tcgHFqTmfoLWLDkqiNNSA6_ZMKUikPqg6HjY5OZ_Q9Sf4WcL9_YInC-MnFvw7WsqMgdvErO21wy8mTZ1vND02Gtxy40KTUbLtICBEiUbOc6hLolxCL4DGLAFKaVhoLUGbifEUS_t9K-_V1DKZHYgU",
  name = "Adept Practitioner",
  level = "IX"
}) {
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
            src={avatarUrl}
          />
        </div>
      </div>

      {/* Nombre con gradiente dorado */}
      <h2 
        className="font-display text-2xl tracking-widest uppercase mb-1"
        style={{
          background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {name}
      </h2>

      {/* Nivel espiritual */}
      <p className="text-primary/60 font-serif italic text-lg tracking-wide">
        Spirituality Level {level}
      </p>
    </div>
  )
}

export default UserAvatarSection
