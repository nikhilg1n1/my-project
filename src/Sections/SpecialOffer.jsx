import React from 'react'
import { offer } from '../assets/images'
import Button from './Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'> 
            <h2 className='mt-10 font-palanquin text-4xl capitalizeB font-bold lg:max-w-lg'>
      
                <span className='text-coral-red'> Special</span> Offer

            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticusouly crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegence.</p>
            <p className='mt-6 lg:max-w-lg info-text'>Our dedication to details and excellence ensures your satisfaction </p>
            <div className='mt-11 flex flex-wrap gap-4'>
              <Button label="Shop now" iconURL={arrowRight}></Button>
              <Button label="Learn more" backgroundColor="bg-white" borferColor="border-slate-gray" texyColor="text-slate"></Button>
            </div>
      </div>
    </section>
  )
}

export default SpecialOffer