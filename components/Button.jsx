import React from 'react'

const Button = props => {
  return (
    <button className="
    bg-[#45A29E]
    w-[200px] 
    rounded-md 
    font-medium 
    my-6 
    mx-auto 
    py-3
    text-black">
        {props.string}
    </button>
  )
}

export default Button