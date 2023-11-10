import React from 'react'
import BookDetailRoute from './BookDetailRoute';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const BookDetail = () => {
    const [card,setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id) 
        setCard(cardDetail)
    },[id,cards])

  return (
    <div className=' bg-[#e6ecf0] min-h-screen pt-10 md:pt-32'><BookDetailRoute key={id} card={card}></BookDetailRoute> </div>
  )
}

export default BookDetail