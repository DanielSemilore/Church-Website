import React from 'react'

const SubHeader5 = () => {
  return (
    <section className="w-full bg-[url('src/assets/bg2.png')] bg-cover bg-center">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white bg-opacity-80 rounded-lg p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="text-left">
              <h3 className="font-bold uppercase text-2xl sm:text-3xl md:text-4xl leading-tight">
                We want to<br />
                serve the world<br />
                around us
              </h3>
            </div>

            <div className="flex-shrink-0">
              <img src="src/assets/Home6.svg" alt="icon6" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
            </div>
          </div>

          <div className="text-xs font-light mt-4 md:mt-6 text-gray-700">
            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p className="">sed do eiusmod tempor.</p>
          </div>

          <div className="mt-6">
            <button className="bg-orange-400 text-black font-semibold py-2 px-6 rounded uppercase hover:bg-orange-500">visit</button>
          </div>

          <div className="h-2 bg-orange-200 mt-6 rounded"></div>
        </div>
      </div>
    </section>
  )
}

export default SubHeader5