import React from 'react'
import Logo from '../assets/logo.png'
function navbar() {
  return (
    <div className='my-4 flex flex-row items-center justify-between'>
      <div className='flex flex-row gap-6 items-center'>
        <div className='flex flex-row gap-4 items-center'>
          <img src={Logo} alt="logo" />
          <h1 className='font-bold'>Landwind</h1>
        </div>
      
         <div>
        <ul className='flex gap-6 text-sm'>
         <li>Company</li> 
         <li>Marketplace</li>
         <li>Features</li>
         <li>Team</li>
         <li>Contact</li>
        </ul>
        </div>
      </div>


        <div className='flex flex-row gap-6 items-center text-sm' >
          <p>Login</p>
          <p className='bg-purple-700 rounded-lg p-2 text-white'>Get Started</p>
        </div>
      
    </div>
  )
}

export default navbar