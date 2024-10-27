import React from 'react'
import Image from 'next/image'
import Badge from './badge'

function Hours() {
  return (
    <section className='flex bg-black h-[60vh] xl:h-[80vh]'>
    <div className='hidden relative xl:flex flex-1 justify-center items-center '>
     <div className='w-full h-full absolute z-40 top-0 bg-black-70'>
        <Image 
          src="/assets/opening-hours/img.png" 
          fill 
          alt="Hours" 
          quality={100} 
          className='object-cover opacity-20' 
          priority 
        />
      <Badge containerStyles='w-[320px] h-[320px] absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />

      </div>
      </div>


      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="relative w-full h-full">
          <Image 
            src="/assets/opening-hours/bg.png" 
            alt="Hours" 
            fill 
            className='object-cover opacity-20' 
            priority 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-7xl font-body">Opening Hours</h2>
             <div className='relative w-[300px] h-[220px] xl:w=[470px] xl:h-[280px]'>
                <Image src="/assets/opening-hours/program-badge.svg" alt="Hours" fill className='object-contain w-full h-full' quality={100} priority />

             </div>
            </div>
          </div>
        </div>

      </div>
      </section>
      
    
  )
}

export default Hours
