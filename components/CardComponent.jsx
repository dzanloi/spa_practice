import Image from "next/image";
import Button from "./Button";

const CardComponent = props => {
  return (
        <div className='
            w-full 
            shadow-xl 
            flex 
            flex-col 
            p-4 
            md:my-0
            my-8
            rounded-lg
            hover:scale-105
            duration-300
            '>
                <Image src={props.imageSrc} className="w-36 mx-auto mt-[-3rem] bg-white"/>
                <h2 className="text-black text-2xl font-bold text-center py-8">{props.title}</h2>

                <p className="
                text-black 
                text-center 
                text-4xl 
                font-bold
                ">
                    {props.price}
                </p>

                <div className="text-center font-medium">
                    <p className="text-black py-2 border-b mx-8 mt-8">{props.detail1}</p>
                    <p className="text-black py-2 border-b mx-8">{props.detail2}</p>
                    <p className="text-black py-2 border-b mx-8">{props.detail3}</p>
                </div>

                <Button string="Buy Gear"/>
            </div>
  )
}

export default CardComponent