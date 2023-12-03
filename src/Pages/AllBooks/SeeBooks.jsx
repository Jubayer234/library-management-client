import React from 'react'
import Books from './Books'

const SeeBooks = ({ data }) => {
  return (
  <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 rounded-3xl mt-5 p-8 lg:p-0'>
                {
                    data?.map(data => <Books
                        key={data._id}
                        data={data}
                    ></Books>)
                }
            </div>
  )
}

export default SeeBooks