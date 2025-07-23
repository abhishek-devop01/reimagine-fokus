import React from 'react'

const Stripe = ({val}) => {

   
  return (
    <div className='w-1/6 px-4 py-3 border-[0.01px] border-zinc-200 bg-zinc-300 border-r-1 border-r-zinc-700 text-black flex items-center justify-between'>
        <img className='w-40' src={val.url} style={{color:"red"}} alt="" />
        <span>{val.num}</span>
    </div>
  )
}

export default Stripe