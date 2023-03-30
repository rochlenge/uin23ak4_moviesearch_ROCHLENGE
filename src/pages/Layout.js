import React, { useState } from "react";
import FrontPage from "../components/FrontPage";
import SearchResults from "../components/SearchResults";
import MovieCard from "../components/MovieCard";
import "../css/main.scss";

function Layout() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  const handleSearch = async (searchTerm) => {
    const apiKey = "9fda6d3c";
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${apiKey}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSelectMovie = (imdbID) => {
    setSelectedMovieID(imdbID);
  };

  return (
    <div className="layout">
      <h1 className="page-title">FILMSØK</h1>
      <SearchResults onSearch={handleSearch} />
      <div className="movie-list">
        {selectedMovieID ? (
          <MovieCard imdbID={selectedMovieID} />
        ) : (
          <>
            <FrontPage />
            <SearchResults
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Layout;