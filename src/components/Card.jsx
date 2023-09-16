import React from 'react';
import favourite from '../assets/Favorite.svg';
import {useState} from 'react'
import {Link} from "react-router-dom"

const Card = ({title,poster, releaseDate, ...props}) => {
    let src = `https://image.tmdb.org/t/p/original${poster}`
    let utcDateArr = releaseDate.split('-');

    const [favourites, setFavourites] = useState(false)

    function handleFavourite(){
      setFavourites(!favourites)
    }
  return (

    <Link to={`/movies/${props.id}`} className="card-profile md:w-[95%] transition duration-300 transform rounded shadow-lg hover:scale-90" data-testid ='movie-card' >
        <img src={src} alt="movie image" data-testid="movie-poster" className='card--img'/>
        <h1 data-testid ='movie-title'>{title}</h1>
        <p data-testid ='release-date'>{releaseDate}</p>
        <div className='absolute cursor-pointer right-[10px]'>
        <img onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          handleFavourite()
        }} style={favourites ? {backgroundColor: 'rgba(190, 18, 60, 1)', borderRadius: '15px'}:{backgroundColor: 'transparent'}} src={favourite} alt="favourite logo" />
        </div>
        
    </Link>
    
  )
}

export default Card
