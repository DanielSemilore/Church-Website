import React from 'react'
import SubHeader4 from './SubHeader4'

const SubHeader3 = () => {
  return (
    <div className="block justify-center h-screen w-full text-black bg-gray-200">
        <div className="text-center uppercase pt-25">
            <p className="text-xs pb-5">Watch and listen</p>
            <h1 className="font-bold text-4xl">The benefits of</h1>
            <h2 className="font-bold text-4xl pt-5">Joining our church</h2>
            <div className="flex justify-around text-left pt-10">
                <div className="mr-5">
                    <img src="src/assets/Sub+headline1.png" alt="image 1" loading="lazy" className="w-60 h-80" />
                    <div className="z-2 relative bottom-35 left-5 text-left text-white">
                        <h3 className="font-bold text-1xl pt-0 uppercase">watch and listen to</h3>
                        <h3 className="font-bold text-1xl uppercase">our sermons</h3>
                        <p className="text-xs pt-5">Lorem ipsum dolor sit amet,</p>
                        <p className="text-xs">consectetur adipiscing elit dolore,</p>
                        <p className="text-xs">sed do eiusmod incididunt.</p>
                    </div>
                </div>
                <div className=" mr-5">
                    <img src="src/assets/Sub+headline2.png" alt="image 2" loading="lazy" className="w-60 h-80"/>
                    <div className="z-2 relative bottom-20 left-5 text-left text-white">
                        <h3 className="font-bold text-1xl pt-0 uppercase">watch and listen to</h3>
                        <h3 className="font-bold text-1xl uppercase">our sermons</h3>
                    </div>
                </div>
                <div className="mr-5">
                    <img src="src/assets/Sub+headline3.png" alt="image 3" loading="lazy" className="w-60 h-80"/>
                    <div className="z-2 relative bottom-20 left-5 text-left text-white">
                        <h3 className="font-bold text-1xl pt-0 uppercase">watch and listen to</h3>
                        <h3 className="font-bold text-1xl uppercase">our sermons</h3>
                    </div>
                </div>
                <div className="mr-5">
                    <img src="src/assets/Sub+headline4.png" alt="image 4" loading="lazy" className="w-60 h-80"/>
                    <div className="z-2 relative bottom-20 left-5 text-left text-white">
                        <h3 className="font-bold text-1xl pt-0 uppercase">watch and listen to</h3>
                        <h3 className="font-bold text-1xl uppercase">our sermons</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center h-screen w-full text-black">
            <SubHeader4 />
        </div>
    </div>
  )
}

export default SubHeader3