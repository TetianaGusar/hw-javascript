import React, { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const data = [
    {
      img: "https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Dog Explorer",
      description: "Active dog exploring spectacular places"
    },
    {
      img: "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sleepy Dog",
      description: "Cute dog not so much into oudoors and prefers cuddling in cosy bed"
    },
  ]

  return (
    <>
      <h3>Proj React Homework</h3>
      <div className="card-container">
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  )
}

export default App
