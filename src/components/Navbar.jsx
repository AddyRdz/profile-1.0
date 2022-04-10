import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* Navbar Menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger Nav */}
        <div className='hidden'>
            <FaBars/>
        </div>

        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar