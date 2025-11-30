import React from 'react'
import bg3Src from '../../assets/bg3.png?w=1024;1920&format=avif;webp&as=srcset'
import bg3Fallback from '../../assets/bg3.png?w=1920&format=png&as=src'

const Head = () => {
  return (
    <div className="relative w-full">
      <picture className="pointer-events-none absolute inset-0 -z-10">
        <source type="image/avif" srcSet={bg3Src.avif} />
        <source type="image/webp" srcSet={bg3Src.webp} />
        <img src={bg3Fallback} alt="about background" className="w-full h-full object-cover" />
      </picture>

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