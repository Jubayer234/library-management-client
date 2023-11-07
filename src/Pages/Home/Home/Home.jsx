import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Methods from '../Methods/Methods'

const Home = () => {
  return (
    <div>
      <div className='bg-[#e6ecf0]'>
        <Banner></Banner>
    </div>
      <Methods></Methods>
      <Footer></Footer>
    </div>
  )
}

export default Home