import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookDetailRoute3 from './BookDetailRoute3';

const BookDetail3 = () => {
    const [card,setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id) 
        setCard(cardDetail)
    },[id,cards])

  return (
    <div className=' bg-[#e6ecf0] min-h-screen pt-10 md:pt-32'><BookDetailRoute3 key={id} card={card}></BookDetailRoute3> </div>
  )
}

export default BookDetail3