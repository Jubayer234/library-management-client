import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
  const { id, category, image } = card || {};
  return (
    <div>
      <div className="card bg-[#EEF2F5] shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{category}</h2>
    <div className="card-actions">
    <Link to={`/details/${id}`}><button className="btn bg-[#93A2B5] text-white">See Books</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards