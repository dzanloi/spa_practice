import Image from "next/image";
import Single from '@/assets/single.png';
import Double from '@/assets/double.png';
import Triple from '@/assets/triple.png';
import Button from "./Button";
import CardComponent from "./CardComponent";
import { motion } from "framer-motion";
import Gear1 from '@/assets/gear1.jpg';
import Gear2 from '@/assets/gear2.jpg';
import Gear3 from '@/assets/gear3.jpg';


const Cards = () => {
  return (
    <div 
      initial={{opacity:0, x:0}}
      animate={{
        x:1,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
      }}
      className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <CardComponent 
              imageSrc={Gear1}
              title='Knee Gear 1'
              price="P149.00"
              detail1="+100 Speed Boost"
              detail2="+10% Chance to Escape from Police"
              detail3="Can Breathe Perk"
            />


            <CardComponent 
              imageSrc={Gear2}
              title='Knee Gear 2'
              price="P229.00"
              detail1="+50 Freedom"
              detail2="Lessens Difficulty"
              detail3="+500 Credit Score Boost"
            />


            <CardComponent 
              imageSrc={Gear3}
              title='Knee Gear 3'
              price="P449.00"
              detail1="N-word Pass revoked"
              detail2="Social Rights Activated"
              detail3="Innocent in all crimes" 
            />
        </div>
    </div>
  )
}

export default Cards