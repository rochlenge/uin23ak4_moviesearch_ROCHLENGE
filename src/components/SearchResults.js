import React from "react";
import MovieCard from "./MovieCard";

function SearchResults({ movies, onSelectMovie }) {
  return (
    <ul className="search-results">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          onSelectMovie={() => onSelectMovie(movie.imdbID)}
        />
      ))}
    </ul>
  );
}

export default SearchResults;