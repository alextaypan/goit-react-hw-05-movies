import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as apiService from "../../services/moviesApi";
import s from "./HomePage.module.css";
import { Loader } from "../../components/Loader/Loader";
import NoFoundView from "../../components/NoFoundView/NoFoundView";
import NotFoundPage from "../NotFoundPage";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export default function HomePage() {
  const { url } = useRouteMatch();

  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError("Something went wrong. Try again.");
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <NoFoundView message={error.message} />}

      {status === Status.RESOLVED && (
        <ul className={s.movieGallery}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.movieGalleryItem}>
              <Link to={`${url}movies/${movie.id}`}>
                <img
                  className={s.movieGalleryItemImage}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                      : NotFoundPage
                  }
                  alt={movie.title}
                />
                <p className={s.movieTitle}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
