import React from 'react'
import image from "../img/img.jpeg"
import "../Movie/Movie.css"

export default function Movie() {
  return (
    <div className='item'>
        <ul className="slide-items">
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt=" " /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
        </ul>
    </div>
  )
}
