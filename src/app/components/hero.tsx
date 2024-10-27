import React from 'react'
import Seperator from './explore'
import Badge from './badge'

function Hero() {
  return (
    
    
   <div id='hero' className='h-[80vh] xl:h-screen relative'>
<div className='bg-hero_overlay absolute w-full h-full z-10 bg-black opacity-85'></div>


    <main>
      
      <video autoPlay muted loop className='absolute top-15left-0 w-full h-full object-cover z-0'><source src='assets/hero/video.mp4' type='video/mp4'/>Your browser does not support the video tag.</video>
      </main>
      <div className="container mx-auto h-full flex flex-col items-center justify-center z-20 relative font-body">
        <div className='text-white text-center'>
          <h1 className='text-7xl font-bold mb-4 text-white font-body text-amber-300'>Welcome to Arty</h1>
          <p className='text-4xl mb-8'>Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth</p>
         <a href="#explore" className='bg-amber-300 text-black px-6 py-2 rounded-md hover:bg-amber-600 transition duration-300 shadow-lg text-2xl'>Explore</a>
        </div>
      </div>
     
   </div>
  
  )
}

export default Hero
