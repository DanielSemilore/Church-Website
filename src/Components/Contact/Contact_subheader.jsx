import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../assets/Facebook.svg'
import TwitterIcon from '../../assets/Twitter.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'

const Contact_subheader = () => {
    return (
        <section className="w-full bg-gray-100 text-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Contact form */}
                    <div className="bg-white rounded-md p-6 shadow">
                        <form className="space-y-4">
                            <h2 className="uppercase font-bold text-2xl">Contact form</h2>

                            <div>
                                <label className="sr-only">Full name</label>
                                <input
                                    required
                                    autoComplete="name"
                                    type="text"
                                    className="block w-full border rounded-md bg-gray-50 p-3 text-base"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="sr-only">Email</label>
                                <input
                                    required
                                    autoComplete="email"
                                    type="email"
                                    className="block w-full border rounded-md bg-gray-50 p-3 text-base"
                                    placeholder="Your email"
                                />
                            </div>

                            <div>
                                <label className="sr-only">Subject</label>
                                <input
                                    required
                                    type="text"
                                    className="block w-full border rounded-md bg-gray-50 p-3 text-base"
                                    placeholder="Query related"
                                />
                            </div>

                            <div>
                                <label className="sr-only">Message</label>
                                <textarea
                                    required
                                    className="block w-full border rounded-md bg-gray-50 p-3 text-base min-h-[120px]"
                                    placeholder="Message"
                                />
                            </div>

                            <div>
                                <Link to="*" target="_blank" className="inline-block bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-6 rounded uppercase">
                                    Send Message
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Contact details */}
                    <aside className="space-y-4">
                        <div>
                            <p className="text-sm font-light">Address:</p>
                            <h3 className="uppercase font-bold">NH 234 Public Square</h3>
                            <h3 className="uppercase font-bold">San Francisco 65368</h3>
                        </div>

                        <div>
                            <p className="text-sm font-light">Contact Details:</p>
                            <h3 className="uppercase font-bold">(480) 555-0103</h3>
                            <h3 className="uppercase font-bold">Finsweet@Example.com</h3>
                        </div>

                        <div>
                            <p className="text-sm font-light">Find us here:</p>
                            <div className="pt-2 flex items-center gap-4">
                                <Link to="*" target="_blank" aria-label="Facebook">
                                    <img src={FacebookIcon} alt="facebook icon" className="w-10 h-10" />
                                </Link>
                                <Link to="*" target="_blank" aria-label="Twitter">
                                    <img src={TwitterIcon} alt="twitter icon" className="w-10 h-10" />
                                </Link>
                                <Link to="*" target="_blank" aria-label="LinkedIn">
                                    <img src={LinkedinIcon} alt="linkedin icon" className="w-10 h-10" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Contact_subheader