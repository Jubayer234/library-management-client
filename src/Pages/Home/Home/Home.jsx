import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Methods from '../Methods/Methods'
import BookCards from '../BookCards/BookCards'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const cards = useLoaderData();
  return (
    <div>
      <div className='bg-[#e6ecf0]'>
        <Banner></Banner>
    </div>
      <BookCards cards={cards}></BookCards>
      <Methods></Methods>
      <Footer></Footer>
    </div>
  )
}

export default Home