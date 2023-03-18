import React from 'react'
import './Movie.css'
import image from"../img/img.jpeg"

export default function Movie() {
    return (
    <div>
        <ul className="slide-items">
            <li><img src={image} alt=""/></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
            <li><img src={image} alt="" /></li>
        </ul>
    </div>
    )
}
