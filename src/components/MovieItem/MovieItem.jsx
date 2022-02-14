import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../services/moviesApi";

export const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && <h2>{movie.title}</h2>}
      {/* <img src={movie.poster_path} alt={movie.title} /> */}

      {/* <p>{movie.overview}</p>
          <p>{movie.genres}</p> */}
    </>
  );
};
