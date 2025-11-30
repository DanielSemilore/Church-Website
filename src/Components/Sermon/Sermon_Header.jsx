import React from 'react'
import bg4Src from '../../assets/bg4.png?w=1024;1920&format=avif;webp&as=srcset'
import bg4Fallback from '../../assets/bg4.png?w=1920&format=png&as=src'

const Sermon_Header = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      {/* background visual using <picture> so modern formats are served */}
      <picture className="pointer-events-none absolute inset-0 -z-10">
        <source type="image/avif" srcSet={bg4Src.avif} />
        <source type="image/webp" srcSet={bg4Src.webp} />
        <img src={bg4Fallback} alt="sermon background" className="w-full h-full object-cover" />
      </picture>

      {/* semi-transparent overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/30 -z-5" />

      <div className="container mx-auto px-4 z-10">
        <header className="mx-auto max-w-2xl bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-10 text-center">
          <h1 className="text-lg md:text-2xl font-bold uppercase text-black">sermon</h1>
          <p className="text-2xl md:text-4xl font-bold pt-3 text-black">Take part in our sermons</p>
        </header>
      </div>
    </section>
  )
}

export default Sermon_Header