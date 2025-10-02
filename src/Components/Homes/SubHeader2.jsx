import React from 'react'
import { useState } from 'react'
import SubHeader3 from './SubHeader3';

const SubHeader2 = () => {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="block justify-center h-screen w-full text-black">
      <div className="pt-25">
        <p className="text-xs uppercase pl-160">Sub+Headline</p>
        <div className="item-center pt-5">
          <h2 className="uppercase font-bold text-4xl pl-120">love and compassion</h2>
          <div className="pt-15 text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta!,</p>
            <p>Explicabo assumenda officia, asperiores error enim, dolore totam dignissimos sint velit, sed quasi, Molestiae, dicta? repellat ab minima expedita qui,</p>
            <p>Molestiae, dicta? repellat ab minima expedita qui.</p>
            {readmore && (
                <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque nihil architecto corporis nemo consectetur voluptates et dicta praesentium beatae perferendis, facilis voluptatem? Dignissimos eius ut obcaecati! Accusantium culpa odio similique repudiandae delectus labore eum minus debitis esse est quos, dignissimos sed dolore nemo aliquid atque molestias! Similique, soluta voluptatem.</p>
            )}
            <button onClick={() => setReadmore(!readmore)} className="mt-10 focus:outline-none bg-orange-200 text-black font-bold py-2 px-4 rounded hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2">
                {readmore ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="flex justify-around uppercase text-left pt-10">
            <img src="src/assets/Subheadline1.png" alt="first image" loading="lazy" className="rounded-lg shadow-md w-70" />
            <img src="src/assets/Subheadline2.png" alt="second image" loading="lazy" className="rounded-lg shadow-md w-90 mt-20" />
            <img src="src/assets/Subheadline3.png" alt="third image" loading="lazy" className="rounded-lg shadow-md w-70" />
          </div>
          <div className="text-center uppercase pt-10">
            <p className="text-xs">our mission & vision</p>
            <h3 className="font-bold text-3xl pt-5">celebrate with us</h3>
            <p className="pt-5 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias labore suscipit est quidem odit aliquid incidunt, dignissimos debitis officiis dicta!,</p>
            <p className="text-xs">Molestiae, dicta? repellat ab minima expedita qui.</p>
            <button  onClick={() => setReadmore(!readmore)} className="mt-5 text-xs focus:outline-none text-black hover:font-bold py-2 px-4 hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2">
                {readmore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-screen w-full text-black">
        <SubHeader3 />
      </div>
    </div>  
  )
}

export default SubHeader2