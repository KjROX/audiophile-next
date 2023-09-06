import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-full">
            <div className="absolute text-white  ml-[10%] h-full flex flex-col justify-center gap-10">
                <span className="tracking-[1.5rem] text-2xl text-[#979797]">
                    NEW PRODUCT
                </span>
                <h1 className="text-8xl font-bold">
                    XX99 MARK II <br /> HEADPHONES
                </h1>
                <p className="text-2xl tracking-widest">
                    Experience natural,lifelike audio and exceptional <br /> build quality
                    made for the passionate music <br /> enthusiast
                </p>
                <button className="text-white bg-[#D87D4A] hover:bg-[#FBAF85] font-bold w-64 py-6">
                    SEE PRODUCT
                </button>
            </div>
            <div>
                <img src="./images/image-hero.jpg" alt="" className="w-full" />
            </div>
        </div>
    )
}

export default Hero
