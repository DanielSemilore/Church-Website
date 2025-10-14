import React from 'react' 

const SubHeader5 = () => {
  return (
    <div className="block justify-center bg-[url('src/assets/bg2.png')] bg-cover bg-center h-screen w-full text-black">
      <div className="text-left bg-white items-center bg-opacity-70 h-100 w-165 ml-75 mt-70 relative top-35">
        <div className="flex">
          <div className="font-bold uppercase text-4xl pt-15 pl-10 pb-10">
            <h3 className="pb-3">We want to</h3>
            <h3 className="pb-3">serve the world</h3>
            <h3 className="">around us</h3>
          </div>
          <div className="pt-15 pl-10">
            <img src="src/assets/Home6.svg" alt="icon6"/>
          </div>
        </div>  
        <div className="text-xs font-light pl-10 pr-10 pb-5">
          <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p className="">sed do eiusmod tempor.</p>
        </div>
        <button className="ml-10 font-semibold pl-5 h-15 w-40 bg-orange-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2 uppercase">visit</button>
        <div className="bg-orange-200 h-4 w-full mt-5"></div>
      </div>
    </div>                    
  )
}

export default SubHeader5