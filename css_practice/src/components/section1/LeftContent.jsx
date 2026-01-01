import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        <div className='p-6'>
            <h3 className=' text-5xl leading-snug font-bold mb-7'>Prospective <br/><span>Customer</span><br/> Segmentation</h3>
            <p className='text-xl font-medium text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
        </div>
       <div className='text-15xl'>
       <ArrowUpRight />
     </div>
    </div>
  )
}

export default LeftContent