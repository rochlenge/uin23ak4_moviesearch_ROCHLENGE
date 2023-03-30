import React, { useState, useEffect } from "react";
import "../css/main.scss";
import SearchResults from "../components/SearchResults";
import MovieCard from "../components/MovieCard";

const apiKey = "9fda6d3c";
const defaultSearchTerm = "james+bond";

function Forside() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearchSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value;
    if (searchTerm.length < 3) {
      return;
    }
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${apiKey}`
    );
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    async function getMovies() {
      let url = `https://www.omdbapi.com/?s=${defaultSearchTerm}&type=movie&apikey=${apiKey}`;
      if (searchTerm.length >= 3) {
        url = `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${apiKey}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search);
    }
    getMovies();
  }, [searchTerm]);

  return (
    <div>
      <header>
        <h1 style={{ fontSize: "72px" }}>FILMSØK</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Søk etter filmer"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Søk</button>
        </form>
      </header>
      <main>
        {movies && movies.length > 0 ? (
          <SearchResults movies={movies} />
        ) : (
          <ul className="movie-list">
            <DefaultMovieList />
          </ul>
        )}
      </main>
    </div>
  );
}

function DefaultMovieList() {
  const [defaultMovies, setDefaultMovies] = useState([]);

  useEffect(() => {
    async function getDefaultMovies() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${defaultSearchTerm}&type=movie&apikey=${apiKey}`
      );
      const data = await response.json();
      setDefaultMovies(data.Search);
    }
    getDefaultMovies();
  }, []);

  return (
    <>
      {defaultMovies.map((movie) => (
        <li key={movie.imdbID}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </>
  );
}

export default Forside;