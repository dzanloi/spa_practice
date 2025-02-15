"use client"
import Navbar from "@/components/Navbar";
import React from "react";
import { ReactTyped } from "react-typed";
import Button from "./Button";
import Image from "next/image";
import kneegear from "@/public/kneegear.png"
import kneegear2 from "@/public/kneegear2.png"
import kneegear3 from "@/public/kneegear3.png"
import kneegear4 from "@/public/kneegear4.png"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
// bg-[#1F2833]
// [#66FCF1]
const Hero = () => {
  return (
    <div className="text-white bg-primary">
        <div className='
            max-w-[800px] 
            w-full 
            mx-auto 
            text-center
            flex 
            flex-col
            justify-center
        '>

            {/* <h1 className='text-xl font-bold md:text-7xl md:py-6 sm:text-6xl'>Buy with confidencc.</h1> */}
            <div className="container flex items-center justify-center">
                <p className='py-4 font-bold text-gray-400 md:text-2xl sm:text-4xl'>
                    Fast negrotiation for knee
                    <ReactTyped 
                        strings={['gears', 'gas', 'gaz']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </p> 

            </div>
            
            <Carousel className="w-1/2 mx-auto h-1/2 lg:w-[560px] lg:h-[560px] ">
                <CarouselContent>
                    <CarouselItem className="flex items-center justify-center w-full h-full">
                        <Image
                            quality={100} 
                            src={kneegear}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-full h-full">
                        <Image
                            quality={100}
                            src={kneegear2}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-full h-full">
                        <Image
                            quality={100}
                            src={kneegear3}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-full h-full">
                        <Image
                            quality={100}
                            src={kneegear4}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </CarouselItem>
                </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious/>
            </Carousel>


            <p className="text-sm font-bold text-gray-400 sm:text-xl md:text-2xl">
                Double your time in picking cottons in your work.
            </p>

            <Button string="Buy Now"/>

        </div>
    </div>
  )
}

export default Hero