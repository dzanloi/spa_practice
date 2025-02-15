import React from 'react';
import Image from 'next/image';
import Laptop from '@/assets/laptop.jpg';
import Gays from '@/assets/gays.jpg';
import BlackButton from './BlackButton';

const Analytics = () => {
  return (
    <section className='w-full px-4 py-16 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <Image src={Gays} className='lg:w-[500px] w-[450px] sm:w-[470px] mx-auto my-4 rounded-xl'/>

            <div className='container flex flex-col justify-center'>
                <p className='text-[#45A29E] font-bold'>BLACK MAGIC</p>

                <h1 className='py-2 text-2xl font-bold text-black md:text-4xl sm:text-3xl'>
                    Learn Negromancy
                </h1>

                <p className='text-black text-md sm:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>

                <BlackButton string="Get Started"/>
            </div>
        </div>
    </section>
  )
}

export default Analytics