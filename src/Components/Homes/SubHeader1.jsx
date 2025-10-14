import React from 'react'

const SubHeader1 = () => {
  return (
    <div className="flex justify-center h-screen w-full text-black bg-amber-100">
      <div className="pt-25">
        <p className="text-xs uppercase pl-148">Sub+Headline</p>
        <div className="item-center pt-5">
          <h2 className="uppercase font-bold text-4xl pl-85">A church that's relevant</h2>
          <div className="flex justify-around pt-20 uppercase text-left">
            <div className="bg-amber-200 h-90 w-100 mr-5 ml-1">
              <div className="pt-25 pl-10">
                <img src="src/assets/Home1.svg" alt="icon1"/>
              </div>
              <h3 className="font-bold text-3xl pl-10 pt-5">About us</h3>
              <p className="pt-5 pl-10 font-semibold text-xs">Lorem ipsum dolor sit amet,</p>
              <p className="pl-10 font-semibold text-xs">consectetur adipiscing elit,</p>
              <p className="pl-10 font-semibold text-xs">sed do eiusmod tempor incididunt,</p>
              <p className="pl-10 font-semibold text-xs">ut labore et dolore magna aliqua.</p>
              <div className="bg-amber-300 h-3 w-100 mt-15"></div>
            </div>
            <div className="bg-amber-200 h-90 w-100 mr-5">
              <div className="pt-25 pl-10">
                <img src="src/assets/Home2.svg" alt="icon2"/>
              </div>
              <h3 className="font-bold text-3xl pl-10 pt-5">Get involved</h3>
              <p className="pt-5 font-semibold pl-10 text-xs">Lorem ipsum dolor sit amet,</p>
              <p className="font-semibold pl-10 text-xs">consectetur adipiscing elit,</p>
              <p className="font-semibold pl-10 text-xs">sed do eiusmod tempor incididunt,</p>
              <p className="font-semibold pl-10 text-xs">ut labore et dolore magna aliqua.</p>
              <div className="bg-amber-300 h-3 w-100 mt-15"></div>
            </div>
            <div className="bg-amber-200 h-90 w-100 mr-5">
              <div className="pt-25 pl-10">
                  <img src="src/assets/Home3.svg" alt="icon3"/>
              </div>
              <h3 className="font-bold text-3xl pl-10 pt-5">Giving back</h3>
              <p className="pt-5 font-semibold pl-10 text-xs">Lorem ipsum dolor sit amet,</p>
              <p className="font-semibold pl-10 text-xs">consectetur adipiscing elit,</p>
              <p className="font-semibold pl-10 text-xs">sed do eiusmod tempor incididunt,</p>
              <p className="font-semibold pl-10 text-xs">ut labore et dolore magna aliqua.</p>
              <div className="bg-amber-300 h-3 w-100 mt-15"></div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default SubHeader1