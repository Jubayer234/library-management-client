import React from 'react'
import { Link } from 'react-router-dom';

const Books = ({data}) => {
    const { id, image, category,name,authorName,rating,quantity} = data || {};
  return (
    <div className=''>
        <div className="card shadow-lg">
    <figure>
      <img src={image} className="h-[350px] w-[250px] rounded-md" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title font-bold text-[#1e4b57]">Name : {name}</h2>
      <p className='font-medium'>Category : {category}</p>
      <p className='font-medium'>Author Name : {authorName}</p>
      <p className='font-medium'>Category : {category}</p>
      <p className='font-medium'>Rating : {rating}</p>
      <p className='font-medium'>Quantity : {quantity}</p>
      <div className="card-actions">
      <button className="btn bg-gray-500 rounded-full text-white">Update</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Books