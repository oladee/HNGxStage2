import React from "react";
import favourite from "../assets/Favorite.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ title, poster, releaseDate, ...props }) => {
  let src = `https://image.tmdb.org/t/p/original${poster}`;

  const [favourites, setFavourites] = useState(false);

  const utcReleaseYear = (release_date) => {
    const localDate = new Date(release_date);
    const year = localDate.getUTCFullYear();
    const month = (localDate.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = localDate.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  function handleFavourite() {
    setFavourites(!favourites);
  }
  return (
    <div data-testid="movie-card">
      <Link to={`/movies/${props.id}`}>
        <div className="card-profile md:w-[95%] transition duration-300 transform rounded shadow-lg hover:scale-90">
          <img
            src={src}
            alt="movie image"
            data-testid="movie-poster"
            className="card--img"
          />
          <h1 data-testid="movie-title">{title}</h1>
          <p data-testid="movie-release-date">{utcReleaseYear(releaseDate)}</p>
          <div className="absolute cursor-pointer right-[10px]">
            <img
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleFavourite();
              }}
              style={
                favourites
                  ? {
                      backgroundColor: "rgba(190, 18, 60, 1)",
                      borderRadius: "15px",
                    }
                  : { backgroundColor: "transparent" }
              }
              src={favourite}
              alt="favourite logo"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
