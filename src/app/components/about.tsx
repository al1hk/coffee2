import React from 'react'

function About() {
  return (
    <div>
      <section id="about" className="bg-[#170c04] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <div className="lg:w-1/2 pr-8">
              <img src="/assets/about/photo-1.jpg" alt="Coffee beans" className="w-full h-130 object-cover rounded-lg" />
            </div>
            <div className="lg:w-1/2 text-white mt-8 lg:mt-0">
              <h3 className="text-8xl font-bold mb-4 font-body">Our Journey</h3>
              <p className="text-4xl font-body">
                Founded in 2000, Arty started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
            <div className="lg:w-1/2 pl-8">
              <img src="/assets/about/photo-2.jpg" alt="Barista preparing coffee" className="w-full h-130 object-cover rounded-lg" />
            </div>
            <div className="lg:w-1/2 text-white mt-8 lg:mt-0">
              <h3 className="text-8xl font-bold mb-4 font-body ">Our Promise</h3>
              <p className="text-4xl font-body">
                At Arty, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 pr-8">
              <img src="/assets/about/photo-3.jpg" alt="Coffee shop interior" className="w-full h-130 object-cover rounded-lg" />
            </div>
            <div className="lg:w-1/2 text-white mt-8 lg:mt-0">
              <h3 className="text-8xl font-bold mb-4 font-body">Our Team</h3>
              <p className="text-4xl font-body">
                At Arty, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default About
