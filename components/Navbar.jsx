"use client";

import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className='
        px-4
        text-white 
        flex 
        justify-center 
        items-center 
        h-24
        mx-auto
        max-w-[1240px]'
    >
        <h1 className='text-center py-2 px-4 border-white rounded-xl border text-xl md:text-4xl sm:my-3 md:my-5 sm:text-2xl font-bold text-[#66FCF1]'>Kneegears</h1>

        {/* <ul className='hidden md:flex'>
            <li><a className='p-4' href="">Home</a></li>
            <li><a className='p-4' href="">Company</a></li>
            <li><a className='p-4' href="">Resources</a></li>
            <li><a className='p-4' href="">About</a></li>
            <li><a className='p-4' href="">Contact</a></li>
        </ul> */}

        {/* <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div> */}


        {/* MOBILE NAV */}
        {/* <div className={nav ? 
            'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' :
             'fixed left-[-100%]'}
        >
            <h1 className='w-full text-3xl font-bold text-[#66FCF1] m-4'>Kneegears</h1>

            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'><a href="">Home</a></li>
                <li className='p-4 border-b border-gray-600'><a href="">Company</a></li>
                <li className='p-4 border-b border-gray-600'><a href="">Resources</a></li>
                <li className='p-4 border-b border-gray-600'><a href="">About</a></li>
                <li className='p-4'><a href="">Contact</a></li>
            </ul>
        </div> */}
    </nav>
  )
}

export default Navbar