import React from 'react'
import Cards from '../Cards/Cards'


const BookCards = ({cards}) => {
  return (
    <div className='max-w-7xl mx-auto pb-8'>
        <h3 className='text-center text-3xl md:text-6xl font-serif mt-8 border-b-4 w-3/5 mx-auto border-[#5d666e] pb-5 text-[#5d666e]'> Book categories</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6  bg-[#93A2B5] rounded-3xl p-10 md:p-14'>
            {
                cards?.map(card => <Cards  key={card.id} card={card}></Cards>)
            }
        </div>
    </div>
  )
}

export default BookCards