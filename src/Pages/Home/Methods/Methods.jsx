import React from 'react'
import car from '../../../assets/delivery-car 1.svg'
import like from '../../../assets/customer-service 1.svg'
import payment from '../../../assets/secure-pay 1.svg'
import value from '../../../assets/value 1.svg'


const Methods = () => {
  return (
    <div className='max-w-7xl mx-auto rounded-lg bg-[#5d666e] grid p-10 gap-10 text-white'>
      
       <div className='grid md:grid-cols-2 lg:flex items-center gap-10 lg:gap-20'>
       <div className='flex gap-6'>
            <img src={car} alt="" />
            <div>
                <p className='font-semibold'>Free Delivery</p>
                <p className='text-sm  text-[#FFFFFFCC]'>For all oders over $99</p>
            </div>
        </div>
        <div className='flex gap-6 '>
        <img src={like} alt="" />
            <div>
                <p className='font-semibold'>Expert customer Service</p>
                <p className='text-sm  text-[#FFFFFFCC]'>For a shopping experience </p>
            </div>
        </div>
        <div className='flex gap-6'>
        <img src={payment} alt="" />
            <div>
                <p className='font-semibold'>Free Delivery</p>
                <p className='text-sm  text-[#FFFFFFCC]'>100% secure payment</p>
            </div>
        </div>
        <div className='flex gap-6'>
        <img src={value} alt="" />
            <div>
                <p className='font-semibold'>Amazing Value</p>
                <p className='text-sm text-[#FFFFFFCC]'>We offer competitive prices</p>
            </div>
        </div>
        
       </div>
       
        
    </div>
  )
}

export default Methods