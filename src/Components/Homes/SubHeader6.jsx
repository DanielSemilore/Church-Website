import React from 'react'

const SubHeader6 = () => {
  return (
    <section className="w-full text-black mb-20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs uppercase">read our blog</p>
          <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mt-3">share, inspire, innovate</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="bg-amber-200 rounded-lg p-4 flex flex-col h-full">
              <p className="text-xs font-semibold uppercase text-amber-600">relationship</p>
              <h3 className="font-bold text-lg md:text-xl mt-2 uppercase">watch and listen</h3>
              <h3 className="font-bold text-lg md:text-xl uppercase">to our sermons</h3>
              <div className="mt-3 text-xs font-semibold text-gray-800 flex-1">
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit,</p>
                <p>sed do eiusmod tempor incididunt,</p>
                <p>ut labore et dolore magna aliqua.</p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase">by mathew johnson</p>
                <p className="text-xs font-semibold uppercase">Tuesday 13 May, 2021</p>
              </div>
              <div className="bg-amber-300 h-2 w-16 mt-4 rounded"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubHeader6