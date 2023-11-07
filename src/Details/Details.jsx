import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import TheBooks from '../TheBooks/TheBooks';

const Details = () => {
    const [card,setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id) 
        setCard(cardDetail)
    },[id,cards])

  return (
    <div className=' bg-[#e6ecf0] min-h-screen'><TheBooks card={card}></TheBooks></div>
  )
}

export default Details