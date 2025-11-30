import React, { useState } from 'react'

const Blog_subheader1 = () => {
  const [showText, setShowText] = useState(false)

  return (
    <section className="w-full bg-gray-100 text-black py-12">
      <div className="container mx-auto px-4">
        <p className="text-xs uppercase text-center md:text-left">our blog</p>
        <h2 className="uppercase font-bold text-2xl md:text-4xl text-center md:text-left mt-2">most recent post</h2>

        <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              <img src="src/assets/blog1.png" alt="image1" className="w-full h-auto object-cover md:h-full" />
            </div>

            <div className="p-6 md:col-span-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs uppercase font-light text-gray-600">
                <span className="">Tuesday 13 May, 2022</span>
                <span className="mt-2 sm:mt-0">by John Hunau Deo</span>
              </div>

              <h3 className="uppercase font-bold text-xl md:text-3xl mt-4">church was doing what he often</h3>
              <h3 className="uppercase font-bold text-xl md:text-3xl">did when dropped an oracle</h3>

              <div className="mt-4 text-sm text-gray-800 space-y-2">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, aliquid vel quam perferendis
                  officiis totam est cum sapiente unde, blanditiis, dolorum nobis. Expedita
                </p>
                <p>
                  Pariatur numquam! Eius, tenetur, et numquam eaque officiis sequi ab consequuntur, minima earum
                  molestiae omnis incidunt rem veritatis dolorum. Fugiat.
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setShowText(!showText)}
                  className="bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded"
                >
                  {showText ? 'See less' : 'Learn more'}
                </button>

                {showText && (
                  <div className="mt-4 text-sm leading-relaxed text-gray-700 space-y-1">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, aliquid</p>
                    <p>vel quam adipisci nesciunt perferendis officiis totam est cum</p>
                    <p>sapiente unde, blanditiis, dolorum nobis. Expedita corporis quasi</p>
                    <p>pariatur numquam! Eius, tenetur, et numquam eaque officiis sequi ab</p>
                    <p>consequuntur dicta tempore error, minima earum molestiae omnis incidunt</p>
                    <p>rem veritatis dolorum. Fugiat.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog_subheader1