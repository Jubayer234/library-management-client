import React from 'react'
import BannerImg from '../../../assets/Books.png'

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto md:flex items-center pt-8 pb-20 px-5'>
        <div className='space-y-5 text-center md:text-start mb-10 md:mb-0'>
            <h3 className='font-serif text-[#a38585] text-xl'>TRENDING COLLECTION</h3>
            <h1 className=' text-2xl lg:text-5xl font-serif font-semibold'>Let's Explore <br /> <span className='text-[#3734A9] font-semibold'> Unique Books!</span></h1>
            <p className='text-[#5B5B5B] text-lg'>We believe that reading books are essential to a healthy culture.
            There where authors can connect with readers </p>
            <button className='btn bg-[#3734A9] text-white'>Book collections</button>
        </div>
        <div>
            <img className='bg-[#c4cfdf] mx-auto w-4/5 rounded-tr-[100px] rounded-bl-[100px]' src={BannerImg}/>
        </div>
    </div>
  )
}

export default Banner