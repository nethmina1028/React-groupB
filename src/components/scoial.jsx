import React from 'react'

import Server from '../assets/server.png'
import Globe from '../assets/globe.png'
import User from '../assets/users.png'
import Shopping from '../assets/shopping-cart.png'
import { FaArrowRight } from "react-icons/fa";

function social() {
  return (
    <div className='p-28'>
       <div className='flex flex-row gap-10'>
            <div className='w-1/2'>
                   <h1 className='text-purple-700'>Trusted Worldwide</h1>
                   <h1 className='text-[2.603rem] font-bold  '>Trusted by over 600 million users and 10,000 teams</h1>
                   <p className='mb-4 text-lg opacity-60'>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>

                   <hr />
                   <div className='mt-4 space-y-1 '>
                   <div className='flex items-center gap-2 text-purple-700'>
                        <h1>Explore Legality Guide</h1> 
                        <FaArrowRight/>
                   </div>
                   <div className='flex items-center gap-2 text-purple-700'>
                        <h1>Visit the Trust Center</h1> 
                        <FaArrowRight/>
                   </div>
                   </div>
                   
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <div className=''>
                    <img src={Server} alt="server image" />
                    <h1 className='text-[1.103rem] font-bold'>99.99% uptime</h1>
                    <h1 className='text-sm opacity-55'>for Flowbite, with zero maintenance downtime</h1>
                </div>
                <div>
                    <img src={User} alt="users image"/>
                    <h1 className='text-[1.103rem] font-bold'>600M+ Users</h1>
                    <h1 className='text-sm opacity-55'>trusted by over 600 milion users around the world</h1>
                </div>
                <div>
                    <img src={Shopping} alt="shopping image"/>
                    <h1 className='text-[1.103rem] font-bold'>Millions</h1>
                    <h1 className='text-sm opacity-55'>of transactions per day</h1>
                </div>
                <div>
                    <img src={Globe} alt="globe image" />
                    <h1 className='text-[1.103rem] font-bold'>100+ countries</h1>
                    <h1 className='text-sm opacity-55'>have used Flowbite to create functional websites</h1>
                </div>
                
                 
            </div>
       </div>
    </div>
  )
}

export default social

