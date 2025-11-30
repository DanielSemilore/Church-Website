import React from 'react'
import bg4 from '../../assets/bg4.png'

const Sermon_Header = () => {
  return (
    <section className="bg-cover bg-center min-h-screen w-full flex items-center" style={{ backgroundImage: `url(${bg4})` }}>
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-2xl bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-10 text-center">
          <h1 className="text-lg md:text-2xl font-bold uppercase text-black">sermon</h1>
          <p className="text-2xl md:text-4xl font-bold pt-3 text-black">Take part in our sermons</p>
        </header>
      </div>
    </section>
  )
}

export default Sermon_Header