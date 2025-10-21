import React from 'react'
import { Link, Links } from 'react-router-dom'

const SUB_HEADER3 = () => {
  return (
    <div className="block justify-center h-screen w-full text-black mb-65 pt-40">
      <div className="pt-25 item-center text-center">
        <p className="text-xs uppercase">church members</p>
        <div className="item-center pt-5">
            <h2 className="uppercase font-bold text-4xl">meet our inspirational team</h2>
            <div className="flex pt-15 text-center justify-around">
                <div className="items-center bg-gray-400 h-80 w-100 mr-5 mt-10 ml-10 p-5">
                    <img src="src/assets/About5.png" alt="image5" className="rounded-full border-4 border-white ml-10 h-40 w-40"/>
                    <p className="text-2xl font-bold pt-5">KIM BOWEN</p>
                    <p className="text-xs pt-5">Pastor, Church</p>
                    <div className="pt-5 flex ml-20">
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Facebook.svg" alt="facebook icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Twitter.svg" alt="twitter icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Linkedin.svg" alt="linkedin icon" className="pr-3"/>
                        </Link>
                    </div>
                </div>
                <div className="items-center bg-gray-400 h-80 w-100 mr-5 mt-10 p-5">
                    <img src="src/assets/About6.png" alt="image6" className="rounded-full border-4 border-white ml-10 h-40 w-40"/>
                    <p className="text-2xl font-bold pt-5">DANIELLE  WATKINS</p>
                    <p className="text-xs pt-5">Pastor, Church</p>
                    <div className="pt-5 flex ml-20">
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Facebook.svg" alt="facebook icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                          <img src="src/assets/Twitter.svg" alt="twitter icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Linkedin.svg" alt="linkedin icon" className="pr-3"/>
                        </Link>
                    </div> 
                </div>
                <div className="items-center bg-gray-400 h-80 w-100 mt-10 p-5">
                    <img src="src/assets/About7.png" alt="image7" className="rounded-full border-4 border-white ml-10 h-40 w-40"/>
                    <p className="text-2xl font-bold pt-5">NAOMI CRAIG</p>
                    <p className="text-xs pt-5">Pastor, Church</p>
                    <div className="pt-5 flex ml-20">
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Facebook.svg" alt="facebook icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Twitter.svg" alt="twitter icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Linkedin.svg" alt="linkedin icon" className="pr-3"/>
                        </Link>
                    </div>
                </div>
                <div className="items-center bg-gray-400 h-80 w-100 m-10 p-5">
                     <img src="src/assets/About8.png" alt="image8" className="rounded-full border-4 border-white ml-10 h-40 w-40"/>
                    <p className="text-2xl font-bold pt-5">SANTOS PAYNE</p>
                    <p className="text-xs pt-5">Pastor, Church</p>
                    <div className="pt-5 flex ml-20">
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Facebook.svg" alt="facebook icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Twitter.svg" alt="twitter icon" className="pr-3"/>
                        </Link>
                        <Link target="_blank" to ="*">
                            <img src="src/assets/Linkedin.svg" alt="linkedin icon" className="pr-3"/>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>    
  )
}

export default SUB_HEADER3