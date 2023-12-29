import React from 'react'

export default function About() {
  return (
    <div className='snap-center h-screen flex flex-col items-center justify-between'>
      <div className='h-screen border-4 snap-center w-full px-16 flex justify-between border-red-500'>

        <div className='w-2/6 bg-red-300 border-4 border-red-500 flex justify-center items-center'>
          <img src="images/s10_2.png" className='w-1/2 animate-bounceUpDown' alt="" />
        </div>
        <div className='border-4 border-red-500 w-4/6 p-4 flex flex-col justify-center gap-8 text-right'>
          <h1 className='text-5xl font-semibold'>The Fruit of Eden is at your fingertips!</h1>
          <p className='text-xl text-justify'>In the chronicles of iFruit, our narrative unfolds from the unassuming origins of
            a garage, where a collective vision ignited the spark of innovation. Rooted in a passion for technology, our
            journey encompasses a transformation that transcends traditional gadgetry. From pioneering phones to revolutionary tablets,
            and from powerful desktops to sleek laptops, we've cultivated a diverse spectrum of devices. The essence of iFruit lies not just in the
            tangible products but in the harmonious fusion of these technological marvels, offering an immersive and seamless digital experience.
            This paragraph encapsulates our odyssey, narrating the evolution from humble beginnings to a dynamic force in the realm of comprehensive
            and interconnected technology.</p>
          <div className='flex gap-8 justify-end'>
            <button className='w-36 p-2 bg-gunmetal text-white hover:text-yellow-500 rounded border-none cursor-pointer justify-items-end'>Learn More &gt;</button>
            <button className='w-28 p-2 bg-gunmetal text-white hover:text-yellow-500 rounded border-none cursor-pointer justify-items-end'>Buy &gt;</button>
          </div>
        </div>

      </div>
    </div>

  )
}
