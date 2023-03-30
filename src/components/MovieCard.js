import React from "react";

function MovieCard({ title, year, poster, onSelectMovie }) {
  return (
    <li className="movie-card" onClick={onSelectMovie}>
      <img className="movie-poster" src={poster} alt={`${title} poster`} />
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-year">{year}</p>
      </div>
    </li>
  );
}

export default MovieCard;