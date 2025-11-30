import React from 'react'
import { Link } from 'react-router-dom'
import Home4 from '../../assets/Home4.svg'
import Home5 from '../../assets/Home5.svg'
import SubHeaderImg from '../../assets/SUB+HEADER.png'

const SubHeader4 = () => {
  return (
    <section className="w-full text-black py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs uppercase pb-3">upcoming sermons</p>
          <h1 className="font-bold uppercase text-2xl sm:text-3xl md:text-4xl">join us and become part</h1>
          <h2 className="font-bold uppercase text-2xl sm:text-3xl md:text-4xl pt-2 md:pt-4">of something great</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
          {/* Card */}
          <div className="bg-amber-100 rounded-lg p-6 max-w-xl mx-auto md:mx-0">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-center">
                  <h3 className="font-bold uppercase text-4xl md:text-6xl">20</h3>
                  <p className="text-sm uppercase text-amber-600 mt-1">july</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="font-semibold text-amber-600 uppercase">upcoming sermons</p>
                <h4 className="font-bold uppercase text-xl mt-2">watch and listen</h4>
                <h4 className="font-bold uppercase text-xl">to our sermons</h4>
                <p className="text-xs text-gray-700 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <img src={Home4} alt="icon4" className="w-6 h-6"/>
                    <div>
                      <p className="font-normal text-sm">Friday 23:39 IST</p>
                      <p className="font-normal text-sm">Saturday 11:20 ISD</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <img src={Home5} alt="icon5" className="w-6 h-6"/>
                    <div>
                      <p className="font-normal text-sm">No 233 Main St. New York,</p>
                      <p className="font-normal text-sm">United States</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-black text-white font-bold py-2 px-4 rounded uppercase hover:bg-gray-800">register</button>
                </div>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="w-full flex items-center justify-center">
            <img src={SubHeaderImg} alt="Sub Header" className="w-full max-w-md md:max-w-none h-56 md:h-96 object-cover rounded" />
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/sermons" className="text-sm hover:text-amber-600 hover:font-bold">view all sermons</Link>
        </div>
      </div>
    </section>
  )
}

export default SubHeader4