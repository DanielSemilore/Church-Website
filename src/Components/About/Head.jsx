import React from 'react'

const Head = () => {
  return (
    <div className="w-full bg-[url('/src/assets/bg3.png')] bg-cover bg-center">
      {/* semi-transparent overlay for legibility */}
      <div className="w-full bg-black/40">
        <div className="container mx-auto px-4 py-20 sm:py-28 flex items-center justify-center min-h-[60vh]">
          <header className="text-center text-white uppercase font-bold">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">about us</h1>
            <p className="mt-3 text-lg sm:text-2xl md:text-3xl">serving the world around us</p>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Head