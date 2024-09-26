import React from 'react'
import Hero from '../assets/marketing-strategy 1.png'

function hero() {
  return (
    <div className='flex flex-row  pt-8 items-center gap-4 mx-16'>
        
        <div className=''> 
            <div className='mb-10'>
            <h1 className='text-5xl font-bold gap-8'>Building digital products and brands </h1>
            </div>

            <div className='mb-8'>
            <p className='text-base'>Here at flowbite we focus on markets where technology, innovation, and capital<br/> can unlock long-term value and drive economic growth.</p>
            </div>
            
            <div className='mb-6 flex flex-row gap-4 items-center '>
                <p className='bg-purple-700 rounded-md m-4 p-2 text-white'>Start 30 day free trial</p>
                <p className='border-2 border-gray-400 rounded-md m-4 p-1'>Pricing and FAQ</p>


            </div>
        </div>

        <div className=''>
            <img src={Hero} alt="hero"/>
        </div>
        
    </div>
  )
}

export default hero