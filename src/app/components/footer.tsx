import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

const links = [
  {
    name: 'Home',
    href: '#header',
  },
  {
    name:"Explore",
    href:"#explore",  
  },
  {
    name:"About",
    href:"#about",
  },
  {
    name:"Menu",
    href:"#menu",
  },
  {
    name:"Contact",
    href:"#contact",
  },
]

function Footer() {
  return (
    <footer id="contact" className="bg-[#170c04] text-white py-16 mt-24 bg-cover bg-center relative" style={{
      backgroundImage: `url('https://www.hdwallpapers.in/download/brown_stripes_background_hd_brown_aesthetic-1600x900.jpg')`
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-8xl font-body text-center mb-12 text-white">Arty</h2>
        <nav className="flex justify-center space-x-12 mb-12">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-4xl font-sans hover:text-gray-300 transition duration-300 font-body text-3xl text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center space-x-12">
          <a href="https://www.linkedin.com/in/ali-hassan-16a5682b7/"><FaLinkedin className="text-4xl hover:text-gray-300 cursor-pointer" /></a>
          <a href="https://www.instagram.com/al1hk._/"><FaInstagram className="text-4xl hover:text-gray-300 cursor-pointer" /></a>
          <a href="https://github.com/al1hk"><FaGithub className="text-4xl hover:text-gray-300 cursor-pointer" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
