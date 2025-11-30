import React from 'react'
import Home4 from '../../assets/Home4.svg'
import Home5 from '../../assets/Home5.svg'

const Sub_Header1 = () => {
  return (
    <section className="w-full text-black mb-12 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs uppercase">read our blog</p>
          <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mt-3">share, inspire, innovate</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <article className="bg-amber-200 rounded-lg p-4 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-bold uppercase text-3xl">20</h3>
              <p className="uppercase text-sm">july</p>
            </div>
            <p className="font-semibold text-amber-600 text-xs mt-2 uppercase">upcoming event</p>
            <h3 className="font-bold text-lg mt-2 uppercase">100 random acts</h3>
            <h3 className="font-bold text-lg uppercase">of kindness</h3>
            <div className="mt-3 text-xs font-semibold flex-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
            </div>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold">
              <img src={Home4} alt="icon4" className="w-5 h-5" />
              <div>
                <p>Friday 23:39 IST</p>
                <p>Saturday 11:20 ISD</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs font-semibold">
              <img src={Home5} alt="icon5" className="w-5 h-5" />
              <div>
                <p>No 233 Main St. New York,</p>
                <p>United States.</p>
              </div>
            </div>
            <div className="bg-amber-300 h-2 w-16 mt-4 rounded"></div>
          </article>

          <article className="bg-amber-200 rounded-lg p-4 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-bold uppercase text-3xl">20</h3>
              <p className="uppercase text-sm">july</p>
            </div>
            <p className="font-semibold text-amber-600 text-xs mt-2 uppercase">upcoming event</p>
            <h3 className="font-bold text-lg mt-2 uppercase">faith is a process,</h3>
            <h3 className="font-bold text-lg uppercase">not a destination</h3>
            <div className="mt-3 text-xs font-semibold flex-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-semibold">
              <img src={Home4} alt="icon4" className="w-5 h-5" />
              <div>
                <p>Friday 23:39 IST</p>
                <p>Saturday 11:20 ISD</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs font-semibold">
              <img src={Home5} alt="icon5" className="w-5 h-5" />
              <div>
                <p>No 233 Main St. New York,</p>
                <p>United States.</p>
              </div>
            </div>
          </article>

          <article className="bg-amber-200 rounded-lg p-4 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-bold uppercase text-3xl">20</h3>
              <p className="uppercase text-sm">july</p>
            </div>
            <p className="font-semibold text-amber-600 text-xs mt-2 uppercase">upcoming event</p>
            <h3 className="font-bold text-lg mt-2 uppercase">there is nothing</h3>
            <h3 className="font-bold text-lg uppercase">impossible</h3>
            <div className="mt-3 text-xs font-semibold flex-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-semibold">
              <img src={Home4} alt="icon4" className="w-5 h-5" />
              <div>
                <p>Friday 23:39 IST</p>
                <p>Saturday 11:20 ISD</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs font-semibold">
              <img src={Home5} alt="icon5" className="w-5 h-5" />
              <div>
                <p>No 233 Main St. New York,</p>
                <p>United States.</p>
              </div>
            </div>
          </article>

          <article className="bg-amber-200 rounded-lg p-4 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-bold uppercase text-3xl">20</h3>
              <p className="uppercase text-sm">july</p>
            </div>
            <p className="font-semibold text-amber-600 text-xs mt-2 uppercase">upcoming event</p>
            <h3 className="font-bold text-lg mt-2 uppercase">watch and listen</h3>
            <h3 className="font-bold text-lg uppercase">to our sermons</h3>
            <div className="mt-3 text-xs font-semibold flex-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-semibold">
              <img src={Home4} alt="icon4" className="w-5 h-5" />
              <div>
                <p>Friday 23:39 IST</p>
                <p>Saturday 11:20 ISD</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs font-semibold">
              <img src={Home5} alt="icon5" className="w-5 h-5" />
              <div>
                <p>No 233 Main St. New York,</p>
                <p>United States.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Sub_Header1