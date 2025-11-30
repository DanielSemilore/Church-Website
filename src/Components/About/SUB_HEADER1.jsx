import React from 'react'
import sub1Src from '../../assets/Subheadline1.png?w=320;640;1024&format=avif;webp&as=srcset'
import sub1Fallback from '../../assets/Subheadline1.png?w=1024&format=png&as=src'
import sub2Src from '../../assets/Subheadline2.png?w=320;640;1024&format=avif;webp&as=srcset'
import sub2Fallback from '../../assets/Subheadline2.png?w=1024&format=png&as=src'
import sub3Src from '../../assets/SubHeadline3.png?w=480;768;1024&format=avif;webp&as=srcset'
import sub3Fallback from '../../assets/SubHeadline3.png?w=1024&format=png&as=src'

const SUB_HEADER1 = () => {
  return (
    <section className="w-full text-black bg-white">
      <div className="container mx-auto px-4 py-12">
        <p className="text-xs uppercase text-center text-gray-600">welcome to our church</p>

        <div className="mt-4 text-center">
          <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">love and compassion</h2>
          <div className="mt-4 max-w-3xl mx-auto text-left text-sm sm:text-base text-gray-700 space-y-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta!</p>
            <p>Explicabo assumenda officia, asperiores error enim, dolore totam dignissimos sint velit, sed quasi. Molestiae, dicta? Repellat ab minima expedita qui.</p>
            <p>Molestiae, dicta? Repellat ab minima expedita qui.</p>
          </div>
        </div>

        {/* image gallery - stacks on small screens */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <picture>
            <source type="image/avif" srcSet={sub1Src.avif} />
            <source type="image/webp" srcSet={sub1Src.webp} />
            <img src={sub1Fallback} alt="first image" loading="lazy" className="rounded-lg shadow-md w-full h-48 sm:h-56 object-cover" />
          </picture>
          <picture>
            <source type="image/avif" srcSet={sub2Src.avif} />
            <source type="image/webp" srcSet={sub2Src.webp} />
            <img src={sub2Fallback} alt="second image" loading="lazy" className="rounded-lg shadow-md w-full h-48 sm:h-56 object-cover" />
          </picture>
          <picture>
            <source type="image/avif" srcSet={sub3Src.avif} />
            <source type="image/webp" srcSet={sub3Src.webp} />
            <img src={sub3Fallback} alt="third image" loading="lazy" className="rounded-lg shadow-md w-full h-48 sm:h-56 object-cover" />
          </picture>
        </div>

        {/* two-column details that collapse on small screens */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase text-gray-600">our mission & vision</p>
            <h3 className="uppercase font-bold text-xl sm:text-2xl mt-3">striving for a better<br/>tomorrow</h3>
            <div className="mt-4 text-gray-700 space-y-2 text-sm sm:text-base">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>
              <p>Tempore molestias labore suscipit est quidem odit aliquid incidunt,</p>
              <p>dignissimos debitis officiis dicta! Explicabo assumenda officia,</p>
              <p>asperiores error enim, dolore totam dignissimos sint velit, sed</p>
              <p>quasi, Molestiae, dicta? Repellat ab minima expedita qui,</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-600">what we do</p>
            <h3 className="uppercase font-bold text-xl sm:text-2xl mt-3">bringing peace and joy<br/>to the world</h3>
            <div className="mt-4 text-gray-700 space-y-2 text-sm sm:text-base">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>
              <p>Tempore molestias labore suscipit est quidem odit aliquid incidunt,</p>
              <p>dignissimos debitis officiis dicta! Explicabo assumenda officia,</p>
              <p>asperiores error enim, dolore totam dignissimos sint velit, sed</p>
              <p>quasi, Molestiae, dicta? Repellat ab minima expedita qui.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SUB_HEADER1