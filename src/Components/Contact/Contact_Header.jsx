import React from 'react'

const Contact_Header = () => {
  return (
    <section className="relative bg-[url('/src/assets/bg5.png')] bg-cover bg-center min-h-[60vh] w-full flex items-center">
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <header className="max-w-2xl mx-auto text-center text-white py-12">
          <h1 className="text-sm md:text-lg font-light uppercase tracking-wide">contact</h1>
          <p className="text-2xl md:text-4xl font-bold pt-3">get in touch with</p>
          <p className="text-2xl md:text-4xl font-bold">our church</p>
        </header>
      </div>
    </section>
  )
}

export default Contact_Header