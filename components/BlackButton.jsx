import React from 'react'

const BlackButton = props => {
  return (
    <button className="
    bg-black
    w-[200px] 
    rounded-md 
    font-medium 
    my-6 
    mx-auto 
    md:mx-0
    py-3
    text-[#66FCF1]">
        {props.string}
    </button>
  )
}

export default BlackButton