// import React from 'react'
import './Main.css'
import image from "../img/img1.jpeg"
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Main() {

const [modal, setModal] = useState(false);

const toggleModal = ()=> {
    setModal(!modal)
}

const [count, setCount] = useState(0)
const countUp = () => {
    if(count === 0){
        setCount(prevState => prevState + 1)
    }else{
        setCount(0);
    }
}

const [favorite, setFavorite] = useState("🗂")
const addFavorite = () => {
    if(favorite === "🗂"){
        setFavorite("✅");
    }else{
        setFavorite("🗂");
    }
}


    return (
    <div className='main'>
        <div className="slider">
            <div className="sliderItem">
                <img src={image} alt="" />
                <p><button
                onClick={toggleModal}
                className="modalOpen"
                >More details</button></p>
            </div>
        </div>

        {modal &&(
        <div id="modal">
            <div class="modal-container">
                <div class="modal-header">
                    <h1>Iron Man</h1>
                    <button
                className='closeModal'
                onClick={toggleModal}><span class="modalClose">&times;</span></button>
                </div>
                <div class="modal-body">
                    <img className="modalImg" src={image} alt="" />
                </div>
                <div class="modal-footer">
                    <button><span id="play" />Play <span id="playDisplay">▶️</span></button>
                    <button onClick={addFavorite}><span id="favorites">Add favorites </span><span id="favoriteDisplay">{favorite}</span></button>
                    <button onClick={countUp}><span id="like" />Like <span id="likeDisplay">👍</span><span id="times">{count}</span></button> 
                </div>
                
            </div>
        </div>

        )}

    </div>
    )
}
