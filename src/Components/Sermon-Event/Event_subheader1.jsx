import React from 'react'
import { Link, Links } from 'react-router-dom'

const Event_subheader1 = () => {
  return (
    <div className="block justify-center h-auto w-full item-center bg-gray-100 pb-20 text-black">
        <div className="pt-40 flex text-left">
            <div className="pl-5 h-auto w-500">
              <img src="src/assets/Event1.png" alt="eventimage1" className="w-200 h-100 pb-5"/>
              <p className="text-xs font-semibold pt-15 uppercase text-amber-600">upcoming sermon</p>
              <br />
              <h1 className=" uppercase font-bold text-4xl pb-10">HOW TO TRULY TRUST SOMEONE</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <p className="text-sm">et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit</p>
              <p className="text-sm">amet aliquam id diam maecenas ultricies.</p>
              <br />
              <div className="border-l-amber-200 border-l-5 pl-5 text-1xl">
                <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <p className="pb-2">eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui</p>
                <p>faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
              </div>
              <br />
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <p className="text-sm">et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit</p>
              <p className="text-sm">amet aliquam id diam maecenas ultricies.</p>
            </div>
            <div className="rounded-md ml-5 w-400 bg-white h-130 text-left item-left pl-10 mr-5">
              <h1 className=" uppercase font-bold text-2xl pt-10 pb-5">register now</h1>
              <div className="flex">
                <div className="flex">
                  <img src="src/assets/Home5.svg" alt="event-icon1" className="mr-2"/>
                  <p className="text-xs">
                    No 233 Main St. New York,
                    <br />
                    <span className="mt-2">
                      United States.
                    </span>
                  </p>
                </div>
                <div className="flex ml-10">
                  <img src="src/assets/Home4.svg" alt="event-icon2" className="mr-2" />
                  <p className="text-xs w-25">13 May, 2018</p>
                </div>
              </div>
              <br />
              <p className="font-bold text-lg pb-2">Full Name:</p>
              <input type="text" className="border-b border-gray-300 p-2 mb-5 w-80 font-bold text-black text-2xl" placeholder="leonard john" />
              <br />
              <p className="font-bold text-lg pb-2">Email:</p>
              <input type="text" className="border-b border-gray-300 p-2 w-80 font-bold text-black text-2xl" placeholder="admin@abc.com" />
              <br />
              <button className="bg-orange-200 mt-10 hover:bg-blue-700 h-15 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2">
                <Link target="_blank" to="*" className="pl-10 pr-10 uppercase text-center">register</Link>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Event_subheader1