import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ img, name, role }) => (
    <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
        <img src={img} alt={name} className="rounded-full border-4 border-white w-24 h-24 sm:w-28 sm:h-28 object-cover" />
        <p className="text-lg sm:text-xl font-bold mt-4">{name}</p>
        <p className="text-xs text-gray-600 mt-1">{role}</p>
        <div className="mt-3 flex gap-3">
            <Link target="_blank" to="*"><img src="src/assets/Facebook.svg" alt="facebook" className="w-5 h-5"/></Link>
            <Link target="_blank" to="*"><img src="src/assets/Twitter.svg" alt="twitter" className="w-5 h-5"/></Link>
            <Link target="_blank" to="*"><img src="src/assets/Linkedin.svg" alt="linkedin" className="w-5 h-5"/></Link>
        </div>
    </div>
)

const SUB_HEADER3 = () => {
    return (
        <section className="w-full text-black bg-white py-12">
            <div className="container mx-auto px-4">
                <p className="text-xs uppercase text-center text-gray-600">church members</p>
                <h2 className="uppercase font-bold text-2xl sm:text-3xl text-center mt-3">meet our inspirational team</h2>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <TeamCard img="src/assets/About5.png" name="KIM BOWEN" role="Pastor, Church" />
                    <TeamCard img="src/assets/About6.png" name="DANIELLE WATKINS" role="Pastor, Church" />
                    <TeamCard img="src/assets/About7.png" name="NAOMI CRAIG" role="Pastor, Church" />
                    <TeamCard img="src/assets/About8.png" name="SANTOS PAYNE" role="Pastor, Church" />
                </div>
            </div>
        </section>
    )
}

export default SUB_HEADER3