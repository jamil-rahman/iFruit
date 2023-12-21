import React from 'react'
import Banner from '../components/Banner';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <div className='bg-columbia snap-mandatory snap-y scroll-smooth overflow-y-auto scrollbar-hidden text-white'>
        <Banner />
        <About />
        <Products />
        <Contact />
    </div>
  )
}
