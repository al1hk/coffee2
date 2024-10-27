
import React from 'react'
import Hero from './components/hero'
import Header from './components/header'
import Explore from './components/explore'
import About from './components/about'
import Menu from './components/menu'
import Hours from './components/hours'
import Footer from './components/footer'
function Page() {
  return (
    <div>
      
      <Header/>
      
      <Hero/>
      <Explore/>
      <About/>
        <Menu/>
        <Hours/>
        <Footer/>
      
   </div>
  )
}

export default Page
