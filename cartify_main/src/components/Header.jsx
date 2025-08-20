import React, { useState } from 'react'
import Logo from '/logo.svg'

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="bg-black flex flex-col md:flex-row items-center px-4 md:px-8 py-4">
            <div className="flex justify-between items-center w-full md:w-auto">
                <img src={Logo} alt="Logo" className="w-28 md:w-36" />
                {/* Mobile menu button */}
                <button className="md:hidden ml-auto" aria-label="Open Menu" onClick={() => setShowMenu((prev) => !prev)}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* navbar */}
            {/* Desktop Navbar */}
            <nav className={`hidden md:flex flex-1 justify-center mt-4 md:mt-0 w-auto`}>
                <div className="flex flex-row space-x-4 px-8 py-4 bg-[rgba(217,217,217,0.7)]
 rounded-full shadow shadow-white">
                    <a href="#" className="text-black">Home</a>
                    <a href="#" className="text-black">Shop</a>
                    <a href="#" className="text-black">About</a>
                    <a href="#" className="text-black">Contact</a>
                </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center ml-auto mt-0 py-4 px-3">
                <button className="bg-[#3C3A3A] text-white px-6 py-4 rounded shadow transition hover:bg-[#00FF90] hover:text-black">Sign In</button>
                <button className="bg-white text-black px-4 py-2 shadow hover:bg-gray-200 ml-4 rounded">Login</button>
            </div>

            {/* Mobile Menu Overlay */}
            {showMenu && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center md:hidden transition-all">
                    <button
                        className="absolute top-6 right-6 text-white"
                        aria-label="Close Menu"
                        onClick={() => setShowMenu(false)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col items-center space-y-6">
                        <a href="#" className="text-white text-2xl font-semibold" onClick={() => setShowMenu(false)}>Home</a>
                        <a href="#" className="text-white text-2xl font-semibold" onClick={() => setShowMenu(false)}>Shop</a>
                        <a href="#" className="text-white text-2xl font-semibold" onClick={() => setShowMenu(false)}>About</a>
                        <a href="#" className="text-white text-2xl font-semibold" onClick={() => setShowMenu(false)}>Contact</a>
                    </nav>
                    <div className="flex flex-col items-center space-y-4 mt-8 w-40">
                        <button className="bg-[#3C3A3A] text-white px-6 py-4 rounded shadow transition hover:bg-[#00FF90] hover:text-black w-full">Sign In</button>
                        <button className="bg-[#3C3A3A] text-white px-6 py-4 rounded shadow transition hover:bg-[#00FF90] hover:text-black w-full">Log in</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header