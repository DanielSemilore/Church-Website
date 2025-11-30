import React from 'react'
import { Link } from 'react-router-dom'
import Event1 from '../../assets/Event1.png'
import Home4 from '../../assets/Home4.svg'
import Home5 from '../../assets/Home5.svg'

const Event_subheader1 = () => {
  return (
    <section className="w-full bg-gray-100 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: event details */}
          <div className="space-y-4">
            <img src={Event1} alt="eventimage1" className="w-full max-w-xl h-auto rounded" />
            <p className="text-xs font-semibold uppercase text-amber-600">upcoming sermon</p>
            <h1 className="uppercase font-bold text-2xl md:text-4xl">HOW TO TRULY TRUST SOMEONE</h1>
            <div className="space-y-2 text-sm text-gray-800">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <p>et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit</p>
              <p>amet aliquam id diam maecenas ultricies.</p>
            </div>

            <div className="border-l-4 border-amber-200 pl-4 text-base text-gray-800">
              <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              <p className="pb-2">eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui</p>
              <p>faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
            </div>

            <div className="space-y-2 text-sm text-gray-800">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <p>et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit</p>
              <p>amet aliquam id diam maecenas ultricies.</p>
            </div>
          </div>

          {/* Right: registration card */}
          <aside className="bg-white rounded-md p-6 shadow max-w-md w-full mx-auto">
            <h2 className="uppercase font-bold text-xl mb-4">register now</h2>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <img src={Home5} alt="event-icon1" className="w-5 h-5 mt-1" />
                <p className="text-xs">
                  No 233 Main St. New York,
                  <br />
                  United States.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <img src={Home4} alt="event-icon2" className="w-5 h-5 mt-1" />
                <p className="text-xs">13 May, 2018</p>
              </div>
            </div>

            <div className="mt-4">
              <label className="font-bold text-sm">Full Name:</label>
              <input type="text" className="block border-b border-gray-300 py-2 w-full mt-2 text-base" placeholder="leonard john" />
            </div>

            <div className="mt-4">
              <label className="font-bold text-sm">Email:</label>
              <input type="email" className="block border-b border-gray-300 py-2 w-full mt-2 text-base" placeholder="admin@abc.com" />
            </div>

            <div className="mt-6">
              <Link to="*" target="_blank" className="inline-block bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-6 rounded uppercase">register</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Event_subheader1