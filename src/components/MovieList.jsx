import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies();
        console.log(movieData);
        setMovies(movieData);  // Assuming the API returns an array of movie objects
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div onClick={() => window.open(movie.imdb_url)} key={movie.id} className="movie-card">
          <h2>{movie.movie}</h2> {/* Display the movie */}
          <p>Rating:{movie.rating}</p> {/* Display the rating */}
          <img src={movie.image} alt={movie.name} /> {/* Display movie image */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
