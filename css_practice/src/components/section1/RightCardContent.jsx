import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div>
           <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-normal text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Corporis a, quod minus placeat molestiae autem.</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                         <buton className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></buton>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default RightCardContent