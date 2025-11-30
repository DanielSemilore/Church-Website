import React from 'react'

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
              <img src="src/assets/About1.png" alt="image1" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
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
              <img src="src/assets/About2.png" alt="image2" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
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
              <img src="src/assets/About3.png" alt="image3" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
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
              <img src="src/assets/About4.png" alt="image4" className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SUB_HEADER2