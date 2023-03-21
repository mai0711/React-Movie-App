import React from 'react';
import { useEffect } from 'react';
import "./Search.css";
// import{ useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'


export default function Search() {

    // const{ movie } = useParams();
    const [movieData, setMovieData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [addInputValue, setAddInputValue] = useState("");

    useEffect(()=>{
        getMovieData();
    },[addInputValue])

    const getMovieData = async ()=> {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6a66b47ce6e7d7a0f7ade5211784f182&language=en-US&query=${inputValue}&page=1&include_adult=false`);
        setMovieData(data.results)
    }

    const url ="https://image.tmdb.org/t/p/w500";
    
    const handleOnChange = (e)=>{
        e.preventDefault()
        setAddInputValue(inputValue);
        // setInputValue(""); 
    }

    console.log(inputValue)

    return (
    <div className='search'>
        <hr />
        <h1>Search</h1>
        <form >
            <input 
            type="text" 
            value={inputValue}
            placeholder='Search' 
            onChange={(e)=> setInputValue(e.target.value)}  />

            <button
            id="searchBtn"
            onClick={handleOnChange}>Search</button><br/>
        </form> 

        {movieData?.map(result =>{
            return(
                <div className='movie' key={result.id}>
                    <img className='movieImg' src={url + result.poster_path} alt="" /> 
                    <p className='movieTitle'>{result.title}</p>
                </div>
            )
        })}
    </div>

    )
}
    