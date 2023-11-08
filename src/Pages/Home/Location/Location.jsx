import React from 'react'
import map from '../../../assets/Google-Maps-Frontpage 1.png'

const Location = () => {
  return (
    <div className='max-w-7xl mx-auto grid md:flex rounded-2xl mb-8 bg-[#e6ecf0]'>
        <div className='p-8 space-y-3'>
        <h1 className='text-4xl font-serif'>Connect With Us</h1>
        <p className=''>A library is a place where books and sources of information are stored. <br /> They make it easier for people to get access to them for various purposes. <br /> Libraries are very helpful and economical too. They include books, magazines, newspapers, DVDs, manuscripts and more. In other words, they are an all-encompassing source of information. <span className='text-lg text-black font-semibold'>Grab Us In The Provided Location.</span></p>
        </div>
        <div className='w-full'>
        <img className='h-full' src={map} alt="" />
        </div>
    </div>
  )
}

export default Location