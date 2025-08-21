import React, { useState } from 'react'
import Logo from '/Cartify.svg'
import { HiMenu, HiX } from 'react-icons/hi'

function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className='fixed top-0 left-0 w-full flex items-center justify-between px-4 z-50'>
            {/* Logo */}
            <img src={Logo} alt="Cartify Logo" className='w-20 md:w-28' />

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center justify-center space-x-6 font-semibold bg-[#686868] rounded-full px-8 py-4'>
                <a href="#" className='text-white hover:text-gray-300 transition'>Home</a>
                <a href="#" className='text-white hover:text-gray-300 transition'>About</a>
                <a href="#" className='text-white hover:text-gray-300 transition'>Products</a>
                <a href="#" className='text-white hover:text-gray-300 transition'>Contact</a>
            </nav>

            {/* Desktop CTA */}
            <div className='hidden md:flex items-center space-x-4 bg-[#3C3A3A] rounded-xl px-4 py-2'>
                <button className='text-white px-3 py-2'>Log in</button>
                <button className='text-black bg-[#F0F0F0] px-3 py-2 rounded-r-lg'>Sign up</button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setOpenMenu(!openMenu)}
                className='md:hidden p-3 bg-[#3C3A3A] rounded-full text-white'
            >
                {openMenu ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            {/* Mobile Dropdown */}
            {openMenu && (
                <div className='w-full text-center absolute top-28 right-4 bg-white rounded-lg shadow-lg p-4 z-50'>
                    <ul className='space-y-3'>
                        <li><a href="#" className='block hover:text-gray-600'>Home</a></li>
                        <li><a href="#" className='block hover:text-gray-600'>About</a></li>
                        <li><a href="#" className='block hover:text-gray-600'>Products</a></li>
                        <li><a href="#" className='block hover:text-gray-600'>Contact</a></li>
                    </ul>
                    <div className='flex flex-col space-y-2 mt-4'>
                        <button className='bg-[#3C3A3A] text-white py-2 rounded'>Log in</button>
                        <button className='bg-[#F0F0F0] text-black py-2 rounded'>Sign up</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
