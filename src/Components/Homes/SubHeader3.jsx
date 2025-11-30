import React from 'react'
import sh1 from '../../assets/Sub+headline1.png'
import sh2 from '../../assets/Sub+headline2.png'
import sh3 from '../../assets/Sub+headline3.png'
import sh4 from '../../assets/Sub+headline4.png'

const SubHeader3 = () => {
    return (
        <section className="w-full bg-gray-200 text-black py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs pb-3 uppercase">Watch and listen</p>
                <h1 className="font-bold text-2xl md:text-4xl">The benefits of</h1>
                <h2 className="font-bold text-2xl md:text-4xl pt-3 md:pt-5">Joining our church</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 items-start">
                    <div className="relative w-full max-w-xs mx-auto">
                        <img src={sh1} alt="image 1" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded" />
                        <div className="absolute left-4 bottom-4 text-left text-white bg-gradient-to-t from-black/70 to-transparent p-3 rounded">
                            <h3 className="font-bold text-lg uppercase">watch and listen to</h3>
                            <h3 className="font-bold text-lg uppercase">our sermons</h3>
                            <p className="text-xs pt-2">Lorem ipsum dolor sit amet,</p>
                            <p className="text-xs">consectetur adipiscing elit dolore,</p>
                            <p className="text-xs">sed do eiusmod incididunt.</p>
                        </div>
                    </div>

                    <div className="relative w-full max-w-xs mx-auto">
                        <img src={sh2} alt="image 2" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded" />
                        <div className="absolute left-4 bottom-4 text-left text-white bg-gradient-to-t from-black/60 to-transparent p-3 rounded">
                            <h3 className="font-bold text-lg uppercase">watch and listen to</h3>
                            <h3 className="font-bold text-lg uppercase">our sermons</h3>
                        </div>
                    </div>

                    <div className="relative w-full max-w-xs mx-auto">
                        <img src={sh3} alt="image 3" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded" />
                        <div className="absolute left-4 bottom-4 text-left text-white bg-gradient-to-t from-black/60 to-transparent p-3 rounded">
                            <h3 className="font-bold text-lg uppercase">watch and listen to</h3>
                            <h3 className="font-bold text-lg uppercase">our sermons</h3>
                        </div>
                    </div>

                    <div className="relative w-full max-w-xs mx-auto">
                        <img src={sh4} alt="image 4" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded" />
                        <div className="absolute left-4 bottom-4 text-left text-white bg-gradient-to-t from-black/60 to-transparent p-3 rounded">
                            <h3 className="font-bold text-lg uppercase">watch and listen to</h3>
                            <h3 className="font-bold text-lg uppercase">our sermons</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubHeader3