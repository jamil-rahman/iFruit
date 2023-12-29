import React from 'react'
import NavBar from './NavBar'

export default function Banner() {
  return (
    <div className='snap-center h-screen flex flex-col items-center justify-between'>
      <NavBar />
      <div className='h-screen border-4 snap-center w-full px-16 flex md:flex-row flex-col-reverse justify-between '>

        <div className=' w-2/3 flex md:flex-col justify-center gap-8'>
          <h1 className='text-5xl font-semibold'>iFruit. Embrace Innovation.</h1>
          <h2 className='text-2xl font-normal'>Experience Everything. Everywhere. All at Once!</h2>
          <p className='text-xl'>Cutting-Edge Smart Phones. lorem Seamlessly Redefine Your Digital Realm. Your Future Device Awaits!</p>
          <div className='flex gap-8'>
            <button className='w-36 p-2 bg-gunmetal text-white hover:text-yellow-500 rounded border-none cursor-pointer'>Learn More &gt;</button>
            <button className='w-28 p-2 bg-gunmetal text-white hover:text-yellow-500 rounded border-none cursor-pointer'>Buy &gt;</button>
          </div>
        </div>
        <div className='w-1/3 bg-red-300 border-4 border-red-500 flex justify-center items-center'>
          <img src="images/s10_2.png" className='w-1/2 animate-bounceUpDown' alt="" />
        </div>
      </div>
    </div>
  )
}
