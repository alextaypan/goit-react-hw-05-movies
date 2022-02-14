import { fetchTrendingMovies } from "../../services/moviesApi";
import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const HomeView = () => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
