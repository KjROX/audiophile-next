import React from 'react'

const Header = () => {
    return (
        <header className="w-full absolute z-10">
            <div className="w-4/5 py-12 m-auto flex justify-between items-center">
                <div>
                    <div className="flex justify-between items-center">
                        <img src="./images/logo.svg" alt="Logo" />
                    </div>
                </div>
                <div className="text-white w-1/3 flex justify-between items-center gap-10">
                    <a href="#" className="tracking-wide hover:text-[#D87D4A]">
                        HOME
                    </a>
                    <a href="#" className="tracking-wide hover:text-[#D87D4A]">
                        HEADPHONES
                    </a>
                    <a href="#" className="tracking-wide hover:text-[#D87D4A]">
                        SPEAKERS
                    </a>
                    <a href="#" className="tracking-wide hover:text-[#D87D4A]">
                        EARPHONES
                    </a>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <button>
                        <img className="h-9" src="./images/user.svg" alt="" />
                    </button>
                    <button>
                        <img src="./images/icon-cart.svg" alt="cart" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
