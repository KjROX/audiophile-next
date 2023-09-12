"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathName = usePathname();
    return (
        <header className="w-full bg-[#191919]">
            <div className="w-4/5 py-8 m-auto flex justify-between items-center border-b-[1px] border-gray-700">
                <div>
                    <div className="flex justify-between items-center">
                        <Link href="/">  <img src="./images/logo.svg" alt="Logo" /></Link>
                    </div>
                </div>
                <div className="text-white w-1/3 flex justify-between items-center gap-10 text-sm">
                    <Link href="#" className={`tracking-wide hover:text-[#D87D4A]  ${pathName === `/` ? `text-[#D87D4A]` : ``}`}>
                        HOME
                    </Link>
                    <Link href="#" className="tracking-wide hover:text-[#D87D4A]">
                        HEADPHONES
                    </Link>
                    <Link href="#" className="tracking-wide hover:text-[#D87D4A]">
                        SPEAKERS
                    </Link>
                    <Link href="#" className="tracking-wide hover:text-[#D87D4A]">
                        EARPHONES
                    </Link>
                </div>
                <div className="flex  items-center ">
                    <button>
                        <img src="./images/icon-cart.svg" alt="cart" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
