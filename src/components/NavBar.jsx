import React from 'react'

export default function NavBar() {
  return (
    <nav className='w-full flex flex-col md:flex-row md:justify-around p-2 bg-gunmetal text-white'>
      <img src="/images/logo.png" alt="Logo for iFruit" className=' items-center max-w-14 md:max-w-10 h-auto'/>
        <ul className='items-center list-none flex flex-col md:flex-row '>
            <li className='mr-6'>Home</li>
            <li className='mr-6' >Our Products</li>
            <li className='mr-6'>About Us</li>
            <li className='mr-6'>Contact Us</li>
        </ul>
        <div className=' min-w-44 flex justify-between'>
        <img src="/images/icons8-search-150.png" alt="A Search Icon" className='max-w-10 h-auto'/>
        <button className='w-28 p-1 bg-columbia text-gunmetal rounded border-none cursor-pointer'>Search</button>
        </div>
    </nav>
  )
}
