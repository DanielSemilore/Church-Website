import React, { useState } from 'react'

const SubHeader2 = () => {
  const [readmore, setReadmore] = useState(false)

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xs uppercase mb-3 text-center sm:text-left">Sub+Headline</p>

        <div className="prose max-w-none text-center sm:text-left">
          <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            love and compassion
          </h2>

          <div className="text-base sm:text-lg leading-relaxed space-y-4 mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore suscipit est quidem
              odit aliquid incidunt, dignissimos debitis officiis dicta!
            </p>
            <p>
              Explicabo assumenda officia, asperiores error enim, dolore totam dignissimos sint velit, sed quasi.
            </p>
            <p>Molestiae, dicta? repellat ab minima expedita qui.</p>

            {readmore && (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque nihil architecto corporis nemo
                consectetur voluptates et dicta praesentium beatae perferendis, facilis voluptatem? Dignissimos eius ut
                obcaecati!
              </p>
            )}

            <div className="flex justify-center sm:justify-start">
              <button
                onClick={() => setReadmore((s) => !s)}
                className="mt-4 inline-flex items-center px-4 py-2 bg-amber-300 text-black font-semibold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                aria-expanded={readmore}
              >
                {readmore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>

        {/* responsive image row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          <img
            src="src/assets/Subheadline1.png"
            alt="first"
            loading="lazy"
            className="w-full h-48 sm:h-40 md:h-52 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/Subheadline2.png"
            alt="second"
            loading="lazy"
            className="w-full h-48 sm:h-40 md:h-52 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/Subheadline3.png"
            alt="third"
            loading="lazy"
            className="w-full h-48 sm:h-40 md:h-52 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* mission section */}
        <div className="mt-10 text-center sm:text-left">
          <p className="text-xs uppercase">our mission & vision</p>
          <h3 className="font-bold text-xl sm:text-2xl mt-3">celebrate with us</h3>
          <div className="mt-4 space-y-2 text-sm sm:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore suscipit est quidem odit
              aliquid incidunt.
            </p>
            <p>Molestiae, dicta? repellat ab minima expedita qui.</p>
          </div>

          <div className="mt-5">
            <button
              onClick={() => setReadmore((s) => !s)}
              className="inline-flex items-center px-4 py-2 bg-amber-300 text-black font-semibold rounded-md hover:bg-amber-400 focus:outline-none"
            >
              {readmore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
