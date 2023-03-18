import React from 'react'
import './Header.css'
// import {useNavigate} from "react-router-dom"

export default function Header() {
    
    return (
    <div className='header'>
        <nav>
            <div className='nav'>
                <h2 className='nav-title'>Movie App</h2>
                <div className="nav-link">
                    <button>Home</button>
                    <button>TV shows</button>
                    <button>Movies</button>
                    <button>New & Popular</button>
                    <button>My List</button>
                    <button>Logout</button>
                    <button>Search</button>
                </div>
            </div>
        </nav>
    </div>
    )
}
