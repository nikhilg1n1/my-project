import React from 'react'
import Nav from './Sections/Nav'
import Hero from './Sections/Hero'
import PopularProducts from './Sections/PopularProducts'
import SuperQuality from './Sections/SuperQuality'
import Services from './Sections/Services'
import SpecialOffer from './Sections/SpecialOffer'
import CustomerReviews from './Sections/CustomerReviews'
import Subscribe from './Sections/Subscribe'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <div className="relative">
      <Nav></Nav>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className='padding'> 
        <PopularProducts></PopularProducts>
      </section>

      <section className='padding'> 
        <SuperQuality></SuperQuality>
      </section>

      <section className='padding-x py-10'> 
        <Services></Services>
      </section>

      <section className='padding'> 
        <SpecialOffer></SpecialOffer>
      </section>

      <section className='padding bg-pale-blue'> 
        <CustomerReviews></CustomerReviews>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full '> 
        <Subscribe></Subscribe>
      </section>
      <section className='padding-x padding-t pb-8 bg-black '> 
        <Footer>
        </Footer>
      </section>

    </div>
  )
}

export default App