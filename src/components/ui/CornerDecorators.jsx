import React from 'react'

const CornerDecorators = () => {
  return (
    <>
      {/* Top Left */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t border-l border-primary/10 rounded-tl-3xl pointer-events-none mt-10 ml-4 z-0" />
      
      {/* Top Right */}
      <div className="fixed top-0 right-0 w-32 h-32 border-t border-r border-primary/10 rounded-tr-3xl pointer-events-none mt-10 mr-4 z-0" />
      
      {/* Bottom Left */}
      <div className="fixed bottom-0 left-0 w-32 h-32 border-b border-l border-primary/10 rounded-bl-3xl pointer-events-none mb-24 ml-4 z-0" />
      
      {/* Bottom Right */}
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b border-r border-primary/10 rounded-br-3xl pointer-events-none mb-24 mr-4 z-0" />
    </>
  )
}

export default CornerDecorators
