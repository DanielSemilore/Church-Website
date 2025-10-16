import React from 'react'
import { Link, Links } from 'react-router-dom'

const SubHeader4 = () => {
  return (
    <div className="block justify-center h-screen w-full text-black">
      <div className="text-center pt-25">
        <p className="text-xs uppercase pb-5">upcoming sermons</p>
        <h1 className="font-bold uppercase text-4xl">join us and become part</h1>
        <h2 className="font-bold text-4xl uppercase pt-5">of something great</h2>
        <div className="flex text-left pt-10 pl-33">
          <div className="bg-amber-100 h-140 w-100 ml-1">              
            <section className="pl-14 pt-5">
              <h3 className="font-bold uppercase text-3xl pl-71">20</h3>
              <div className="flex pb-10">
                <p className="font-semibold text-amber-600 pr-30 uppercase">upcoming sermons</p>
                <p className="uppercase">july</p>
              </div>
              <h4 className="font-bold uppercase text-2xl">watch and listen</h4>
              <h4 className="font-bold uppercase text-2xl pb-8">to our sermons</h4>
              <p className="text-xs pr-10 font-light pb-3">Lorem ipsum dolor sit amet, consectetur</p>
              <p className="text-xs pr-10 font-light pb-8">adipiscing elit, Sed do eiusmod tempor.</p>
              <div className="pb-5 flex">
                <div>
                  <img src="src/assets/Home4.svg" alt="icon4"/>
                </div>
                <div>
                  <p className="font-normal pl-5">Friday 23:39 IST</p>
                  <p className="font-normal pl-5">Saturday 11:20 ISD</p>
                </div>
              </div>
              <div className="pb-10 flex">
                <div>
                  <img src="src/assets/Home5.svg" alt="icon5"/>
                </div>
                <div>
                  <p className="font-normal pl-5">No 233 Main St. New York,</p>
                  <p className="font-normal pl-5">United States</p>
                </div>
              </div>
              <button className="pl-5 h-15 w-40 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2 font-bold pt-2 pb-2 uppercase">register</button>
            </section>
          </div>
          <img src="src/assets/SUB+HEADER.png" alt="Sub Header" className="h-140 mb-5 w-170" />
        </div>
        <Link to="/sermons" className="text-sm hover:text-amber-600 hover:font-bold cursor-pointer pl-250">view all sermons</Link>
      </div>
    </div>
  )
}

export default SubHeader4