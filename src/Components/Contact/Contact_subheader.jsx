import React from 'react'
import { Link, Links } from 'react-router-dom'

const Contact_subheader = () => {
  return (
    <div className="block justify-center h-auto w-full item-center bg-gray-100 pb-20 text-black">
        <div className="pt-40 flex text-left">
            <div className="rounded-md ml-5 w-400 bg-white h-130 text-left item-left pl-10 mr-5">
                <form className="block pt-10 pb-10">
                    <h1 className=" uppercase font-bold text-2xl pt-10 pb-10">contact form:</h1>
                    <input required autoComplete="on" type="text" className="border rounded-md text-lg border-white bg-gray-50 p-2 mb-2 w-100 font-bold text-black h-auto text-2xl" placeholder="Your full Name" />
                    <input required autoComplete="on" type="email" className="border rounded-md text-lg border-white bg-gray-50 p-2 mb-2 w-100 font-bold text-black h-auto text-2xl" placeholder="Your Email" />
                    <input required autoComplete="on" type="text" className="border rounded-md text-lg border-white bg-gray-50 p-2 mb-2 w-100 font-bold text-black h-auto text-2xl" placeholder="Query Related" />
                    <textarea required className="border rounded-md text-lg border-white bg-gray-50 p-2 mb-2 w-100 font-bold text-black h-auto text-2xl" placeholder="Message"></textarea> 
                    <button className="bg-orange-200 mt-10 hover:bg-blue-700 h-10 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2">
                        <Link target="_blank" to="*" className="pl-30 pr-30 uppercase text-center">SEND MESSAGE</Link>
                    </button>
                </form>
            </div>
            <div className="pl-5 h-auto w-500">
                <p className="text-sm font-light pt-20">Address:</p>
                <br />
                <h1 className=" uppercase font-bold text-1xl">nh 234 public square</h1>
                <h1 className=" uppercase font-bold text-1xl">san francisco 65368</h1>
                <br />
                <p className="text-sm font-light">Contact Details:</p>
                <br />
                <h1 className=" uppercase font-bold text-1xl">(480) 555-0103</h1>
                <h1 className=" uppercase font-bold text-1xl">Finsweet@Example.com</h1>
                <br />
                <p className="text-sm font-light">Find us here:</p>
                <div className="pt-5 flex">
                    <Link target="_blank" to ="*">
                        <img src="src/assets/Facebook.svg" alt="facebook icon" className="mr-5 hover:bg-black w-10 h-10"/>
                    </Link>
                    <Link target="_blank" to ="*">
                        <img src="src/assets/Twitter.svg" alt="twitter icon" className="mr-5 hover:bg-black w-10 h-10"/>
                    </Link>
                    <Link target="_blank" to ="*">
                        <img src="src/assets/Linkedin.svg" alt="linkedin icon" className="mr-5 hover:bg-black w-10 h-10"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_subheader