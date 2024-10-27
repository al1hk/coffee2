import React from 'react'

const menuItems = [
  {
    imgsrc: "https://i0.wp.com/coffeeculture.asia/wp-content/uploads/2022/05/Espresso-coffee-Coffee-Culture-Thailand.jpg?fit=512%2C512&ssl=1",
    title: "Espresso",
    description: "A concentrated form of coffee, brewed by forcing hot water under pressure through finely ground coffee beans.",
    price: "500PKR",
  },
  {
    imgsrc: "https://loafology.com/cdn/shop/products/Cappuccino3_1400x.jpg?v=1673329504",
    title: "Cappuccino",
    description: "A creamy and frothy coffee drink made with espresso, steamed milk, and a layer of foam.",
    price: "400PKR",
  },
  {
    imgsrc: "https://www.oddbeans.in/cdn/shop/articles/image1_9a1a2488-7d3e-49e6-ae4a-babcc1c17218.jpg?v=1721478108&width=1100",
    title: "Americano",
    description: "Espresso diluted with hot water, resulting in a milder and less concentrated coffee.",
    price: "700PKR",
  },
  {
    imgsrc: "https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg",
    title: "Latte",
    description: "Two shots of espresso, steamed milk, and a final, thin layer of frothed milk on top. ",
    price: "800PKR",
  },
  {
    imgsrc: "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
    title: "Mocha",
    description: "A chocolate-flavored coffee drink made with espresso, steamed milk, and chocolate syrup.",
    price: "900PKR",
  },

]


function menu() {
  return (
    <div id="menu">
      <section className='pb-12 pt-16 xl:pt-16 xl:pb-36'>
        <div className='container mx-auto'>
          
          <div className="flex flex-col gap-1 mb-6 xl:mb-12">
            <h2 className='text-8xl font-bold text-center mb-2 text-black-900 font-body'>Our Menu</h2>
            <img src="https://png.pngtree.com/png-clipart/20220321/original/pngtree-love-pattern-simple-underline-png-image_7465105.png" alt="Decorative underline" className='w-[250px] h-[150px] mx-auto mb-4' />
          </div>
          <p className='text-center max-w-[620px] mx-auto text-4xl font-body'>Indulge in our rich selection of artisanal coffees, carefully crafted to satisfy every palate. From the bold espresso shots to the creamy lattes and velvety cappuccinos, each cup is brewed to perfection. Savor the unique flavors of our single-origin beans or treat yourself to our signature blends. Pair your coffee with a freshly baked pastry for a delightful experience. Whether you're in the mood for a strong brew or something sweet and soothing, our menu has something for everyone.</p>
        </div>
        <div className='ml-12 flex flex-col items-center gap-12 xl:gap-24 mt-7 xl:mt-12'>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex flex-col items-center ${index === 4 ? 'col-span-2' : ''}`}>
              <img src={item.imgsrc} alt={item.title} className="object-cover mb-4 w-48 h-48 rounded-lg" />
              <h3 className={`font-bold mb-2 font-body ${index === 4 ? 'text-4xl' : 'text-4xl'}`}>{item.title}</h3>
              <p className={`mb-2 font-sans ${index === 4 ? 'text-4xl' : 'text-4xl'}`}>{item.price}</p>
              <p className={`text-center font-body ${index === 4 ? 'text-4xl' : 'text-4xl'}`}>{item.description}</p>
            </div>
          ))}
          
        </div>
        </div>
        
      </section>
    </div>
  )
}

export default menu
