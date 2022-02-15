import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../services/moviesApi";

export const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h2>{movie.original_title}</h2>
      <p>User score: {movie.vote_average}</p>
      <p>Overview</p>
      <p>{movie.overview}</p>
      <p>Genres</p>
      <p>Additional ifrormation</p>
      <Link to="">Cast</Link>
      <Link to="">Reviews</Link>
    </>
  );
};
