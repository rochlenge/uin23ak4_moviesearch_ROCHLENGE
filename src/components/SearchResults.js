import MovieCard from "./MovieCard";

const SearchResults = ({ movies }) => (
  <ul className="movie-list">
    {movies.map((movie) => (
      <li key={movie.imdbID}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);

export default SearchResults;