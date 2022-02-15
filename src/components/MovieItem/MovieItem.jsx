import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../services/moviesApi";
import Cast from "../../views/Cast";

export const MovieDetailsView = () => {
  const { url } = useRouteMatch();
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
      <NavLink to={`${url}/cast`}>Cast</NavLink>
      <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      <Switch>
        <Route path="/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/:movieId/reviews" />
      </Switch>
    </>
  );
};
