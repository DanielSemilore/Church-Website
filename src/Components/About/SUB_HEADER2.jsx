import React from 'react'
import About1Src from '../../assets/About1.png?w=480;768;1024&format=avif;webp&as=srcset'
import About1Fallback from '../../assets/About1.png?w=1024&format=png&as=src'
import About2Src from '../../assets/About2.png?w=480;768;1024&format=avif;webp&as=srcset'
import About2Fallback from '../../assets/About2.png?w=1024&format=png&as=src'
import About3Src from '../../assets/About3.png?w=480;768;1024&format=avif;webp&as=srcset'
import About3Fallback from '../../assets/About3.png?w=1024&format=png&as=src'
import About4Src from '../../assets/About4.png?w=480;768;1024&format=avif;webp&as=srcset'
import About4Fallback from '../../assets/About4.png?w=1024&format=png&as=src'

const SUB_HEADER2 = () => {
  return (
    <section className="w-full text-black bg-white">
      <div className="container mx-auto px-4 py-12">
        <p className="text-xs uppercase text-center text-gray-600">benefits</p>

        <div className="mt-4 text-center">
          <h2 className="uppercase font-bold text-2xl sm:text-3xl">the benefits of</h2>
          <h2 className="uppercase font-bold text-2xl sm:text-3xl">joining our church</h2>
        </div>

        <div className="mt-8 space-y-10">
          {/* Row 1: text left, image right */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase">Find fulfillment and joy</h3>
              <div className="mt-3 text-sm sm:text-base text-gray-700 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore</p>
                <p>suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta! Explicabo assumenda officia,</p>
                <p>asperiores error enim, dolore totam dignissimos sint velit, sed quasi.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <picture>
                <source type="image/avif" srcSet={About1Src.avif} />
                <source type="image/webp" srcSet={About1Src.webp} />
                <img src={About1Fallback} alt="image1" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
              </picture>
            </div>
          </div>

          {/* Row 2: image left, text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase">shared values</h3>
              <div className="mt-3 text-sm sm:text-base text-gray-700 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore</p>
                <p>suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta! Explicabo assumenda officia,</p>
                <p>asperiores error enim, dolore totam dignissimos sint velit, sed quasi.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <picture>
                <source type="image/avif" srcSet={About2Src.avif} />
                <source type="image/webp" srcSet={About2Src.webp} />
                <img src={About2Fallback} alt="image2" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
              </picture>
            </div>
          </div>

          {/* Row 3: text left, image right */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase">charity events</h3>
              <div className="mt-3 text-sm sm:text-base text-gray-700 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore</p>
                <p>suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta! Explicabo assumenda officia,</p>
                <p>asperiores error enim, dolore totam dignissimos sint velit, sed quasi.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <picture>
                <source type="image/avif" srcSet={About3Src.avif} />
                <source type="image/webp" srcSet={About3Src.webp} />
                <img src={About3Fallback} alt="image3" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
              </picture>
            </div>
          </div>

          {/* Row 4: image left, text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase">all are welcome</h3>
              <div className="mt-3 text-sm sm:text-base text-gray-700 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore</p>
                <p>suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta! Explicabo assumenda officia,</p>
                <p>asperiores error enim, dolore totam dignissimos sint velit, sed quasi.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <picture>
                <source type="image/avif" srcSet={About4Src.avif} />
                <source type="image/webp" srcSet={About4Src.webp} />
                <img src={About4Fallback} alt="image4" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SUB_HEADER2