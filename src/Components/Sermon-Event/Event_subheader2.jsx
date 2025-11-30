import React from 'react'
import Home4 from '../../assets/Home4.svg'
import Home5 from '../../assets/Home5.svg'

const Event_subheader2 = () => {
  const cards = [
    {
      titleLines: ['100 random acts', 'of kindness'],
      tag: 'upcoming event'
    },
    {
      titleLines: ['faith is a process,', 'not a destination'],
      tag: 'upcoming event'
    },
    {
      titleLines: ['there is nothing', 'impossible'],
      tag: 'upcoming event'
    },
    {
      titleLines: ['celebrating', 'freedom and life'],
      tag: 'upcoming event'
    }
  ]

  return (
    <section className="w-full bg-gray-200 text-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl text-center">upcoming sermons</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="bg-white rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-baseline justify-between">
                <h3 className="font-bold uppercase text-3xl">20</h3>
                <p className="uppercase text-sm">july</p>
              </div>
              <p className="font-semibold text-amber-600 text-xs mt-2 uppercase">{card.tag}</p>
              <div className="mt-2">
                <h3 className="font-bold text-lg uppercase">{card.titleLines[0]}</h3>
                <h3 className="font-bold text-lg uppercase">{card.titleLines[1]}</h3>
              </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Event_subheader2