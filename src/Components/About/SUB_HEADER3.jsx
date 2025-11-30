import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../assets/Facebook.svg'
import TwitterIcon from '../../assets/Twitter.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'
import About5 from '../../assets/About5.png'
import About6 from '../../assets/About6.png'
import About7 from '../../assets/About7.png'
import About8 from '../../assets/About8.png'

const TeamCard = ({ img, name, role }) => (
    <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
        <img src={img} alt={name} className="rounded-full border-4 border-white w-24 h-24 sm:w-28 sm:h-28 object-cover" />
        <p className="text-lg sm:text-xl font-bold mt-4">{name}</p>
        <p className="text-xs text-gray-600 mt-1">{role}</p>
        <div className="mt-3 flex gap-3">
                <Link target="_blank" to="*"><img src={FacebookIcon} alt="facebook" className="w-5 h-5"/></Link>
                <Link target="_blank" to="*"><img src={TwitterIcon} alt="twitter" className="w-5 h-5"/></Link>
                <Link target="_blank" to="*"><img src={LinkedinIcon} alt="linkedin" className="w-5 h-5"/></Link>
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
                      <TeamCard img={About5} name="KIM BOWEN" role="Pastor, Church" />
                      <TeamCard img={About6} name="DANIELLE WATKINS" role="Pastor, Church" />
                      <TeamCard img={About7} name="NAOMI CRAIG" role="Pastor, Church" />
                      <TeamCard img={About8} name="SANTOS PAYNE" role="Pastor, Church" />
                </div>
            </div>
        </section>
    )
}

export default SUB_HEADER3