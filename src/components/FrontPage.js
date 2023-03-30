import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function FrontPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = "9fda6d3c";
      const response = await fetch(
        `https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=${apiKey}&page=1`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    };

    fetchMovies();
  }, []);

  return (
    <div className="front-page">
      <h2>James Bond Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} imdbID={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

export default FrontPage;