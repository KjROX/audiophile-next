import React from 'react'

const Hero = () => {
    // bg - hero - background - image bg - cover bg - clip - content bg - no - repeat bg - right min - h - [80vh] pb - 10
    return (
        <div className="w-full relative min-h-[50vh]">
            <div className="w-full text-white  ml-[10%] h-full flex flex-col justify-center gap-10 absolute">
                <span className="tracking-[0.625rem] text-sm text-[#979797]">
                    NEW PRODUCT
                </span>
                <h1 className="text-6xl font-bold">
                    XX99 MARK II <br /> HEADPHONES
                </h1>
                <p className="text-base text-[rgba(255,255,255,0.5)] font-normal">
                    Experience natural,lifelike audio and exceptional <br /> build quality
                    made for the passionate music <br /> enthusiast
                </p>
                <button className="text-white bg-[#D87D4A] hover:bg-[#FBAF85] font-bold w-64 py-6 ease-in transition-all hover:ease-in-out duration-300">
                    SEE PRODUCT
                </button>
            </div>
            <div>
                <img src="./images/image-hero.jpg" alt="" className="w-full min-h-[50vh] object-contain" />
            </div>
        </div>
    )
}

export default Hero
