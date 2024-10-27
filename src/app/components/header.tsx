import React from 'react'

function Header() {
  return (
    <div>
      <header id ="header" className= "bg-black text-white p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
          <a href="#header" className="hover:text-gray-300 transition duration-300 font-body text-2xl">Home</a>
          <a href="#explore" className="hover:text-gray-300 transition duration-300 font-body text-2xl">Explore</a>
            <a href="#menu" className="hover:text-gray-300 transition duration-300 font-body text-2xl">Menu</a>
            <a href="#about" className="hover:text-gray-300 transition duration-300 font-body text-2xl">About</a>
            <a href="#contact" className="hover:text-gray-300 transition duration-300 font-body text-2xl">Contact</a>
          </div>
         <div className="absolute left-1/2 transform -translate-x-1/2">
           <img id="logo" className='w-20 h-22' src="/assets/hero/Black and White Minimalist Professional Initial Logo.png" alt="Coffee Logo" />
         </div>
          <div className="w-1/3"></div> {/* This empty div helps balance the layout */}
        </div>
      </header>
    </div>
  )
}

export default Header
