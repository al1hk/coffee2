import React from 'react'
import Image from 'next/image'

function Explore() {
  return (
    <section id='explore' className='py-12 xl:py-0 xl:h-[90vh] xl:w-screen mt-12'>
      <div className='container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center'>
      <div className='w-full flex flex-col lg:flex-row gap-12 xl:gap-20'>
  
    <div className='flex-1 flex flex-col justify-around text-center gap-12 xl:gap-0 max-w-[400px] mx-auto xl:mx-0 xl:max-w-none'>
      <div className='relative flex items-center justify-center'>
        <div className='xl:max-w-[420px] xl:flex xl:flex-col'>
          <div className='mb-6 flex items-center justify-center'>
            <Image src={'/assets/explore/icons/coffee-1.svg'} width={56} height={56} alt='Cup Picture' />
            </div>
            <h3 className='text-2xl xl:text-6xl font-body mb-4 text-center'>Rich Espresso Blends</h3>
            <p className='max-w-[400px] font-body text-3xl xl:text-3xl xl:leading-tight mx-auto text-center'>Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.
            </p>
            </div>
            </div> 
            <div className='relative flex items-center justify-center'>
        <div className='xl:max-w-[420px] xl:flex xl:flex-col'>
          <div className='mb-6 flex items-center justify-center'>
            <Image src={'/assets/explore/icons/coffee-2.svg'} width={56} height={56} alt='Cup Picture' />
            </div>
            <h3 className='text-2xl xl:text-6xl font-body mb-4 text-center'>Classic Drip Coffee</h3>
            <p className='max-w-[400px] font-body text-3xl xl:text-3xl xl:leading-tight mx-auto text-center'>Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.

            </p>
            </div>
            </div> 
      </div>
    <div className='relative w-[322px] h-[580px]'> <Image src='/assets/explore/cup.png' fill alt='Cup Picture' className='w-full h-full object-cover' quality={100} priority /></div>
    <div className='flex-1  flex flex-col justify-around text-center gap-12 xl:gap-0 max-w-[400px] mx-auto xl:mx-0 xl:max-w-none'>
    <div className='relative flex items-center justify-center'>
        <div className='xl:max-w-[420px] xl:flex xl:flex-col'>
          <div className='mb-6 flex items-center justify-center'>
            <Image src={'/assets/explore/icons/coffee-3.svg'} width={56} height={56} alt='Cup Picture' />
            </div>
            <h3 className='text-2xl xl:text-6xl font-body mb-4 text-center'>Smooth Cold Brews</h3>
            <p className='max-w-[400px] font-body text-3xl xl:text-3xl xl:leading-tight mx-auto text-center'>Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.
            </p>
            </div>
            </div> 
            <div className='relative flex items-center justify-center'>
        <div className='xl:max-w-[420px] xl:flex xl:flex-col'>
          <div className='mb-6 flex items-center justify-center'>
            <Image src={'/assets/explore/icons/coffee-4.svg'} width={56} height={56} alt='Cup Picture' />
            </div>
            <h3 className='text-2xl xl:text-6xl font-body mb-4 text-center'>Flavorful Latte Varieties</h3>
            <p className='max-w-[400px] font-body text-3xl xl:text-3xl xl:leading-tight mx-auto text-center'>Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.
            </p>
            </div>
            </div> 
      </div>
    </div>
    </div>
    </section>
  )
}

export default Explore
