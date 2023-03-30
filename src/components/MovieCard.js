import React from "react";

function MovieCard({ movie }) {
  const { Title, Year, Genre, Director, Actors, Awards, Poster } = movie;
  
  return (
    <>
      <img
        src={Poster !== "N/A" ? Poster : "placeholder-image.jpg"}
        alt={`${Title} poster`}
      />
      <h2>{Title}</h2>
      <p>
        År publisert: {Year} <br />
        Sjanger: {Genre} <br />
        Regissør: {Director} <br />
        Skuespillere: {Actors} <br />
        Priser: {Awards} <br />
      </p>
    </>
  );
}

export default MovieCard;