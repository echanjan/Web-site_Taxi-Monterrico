import React from 'react'
import '../components/card.css';

function Card({ image, title, details, text }) {
  return (
    <div className='content-card'>
        <img src={image} className='image-card' alt='card'></img>
        <h3 className='title-card'>{title}</h3>
        <p className='details-card'>{details}</p>
        <p className='text-card'>{text}</p>
    </div>
  )
}

export default Card