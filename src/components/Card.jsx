import React from 'react'

const Card = ({title,poster, releaseDate, ...props}) => {
    let src = `https://image.tmdb.org/t/p/original${poster}`
  return (
    <div className="card-profile">
        <img src={src} alt="movie image" data-testid={poster} className='card--img'/>
        <h1>{title}</h1>
      
    </div>
  )
}

export default Card
