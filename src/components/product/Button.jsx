import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-[13vw]  bg-zinc-100 px-4 py-2.5 rounded-full text-black flex items-center justify-evenly'>
        <span className='text-sm'>{title}</span>
        <BsArrowReturnRight />
    </div>
  )
}

export default Button