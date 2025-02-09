import React from 'react'
import './Card.css'

function Card({ img, title, description }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
