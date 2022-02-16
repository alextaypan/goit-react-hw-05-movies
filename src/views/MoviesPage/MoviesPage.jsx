import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import s from "../HomePage/HomePage.module.css";
import Searchbar from "../../components/SearchBar/SearchBar";
import * as apiService from "../../services/moviesApi";
import notFoundImg from "../../images/notFound.png";
import { Loader } from "../../components/Loader/Loader";
import NoFoundView from "../../components/NoFoundView/NoFoundView";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const history = useHistory();
  const location = useLocation();
  const { search } = location;
  const { query } = queryString.parse(search);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!searchQuery) return;

    setStatus(Status.PENDING);

    apiService
      .fetchMoviesByQuery(searchQuery)
      .then(({ results }) => {
        if (results.length === 0) {
          setError(`No results were found for ${searchQuery}!`);
          setStatus(Status.REJECTED);
          return;
        }
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  const onChangeQuery = (query) => {
    // if (searchQuery === query) {
    //   return;
    // }
    setMovies([]);
    setSearchQuery(query);
    setError(null);
    setStatus(Status.IDLE);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <NoFoundView message={error} />}
      {status === Status.RESOLVED && (
        <ul className={s.movieGallery}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.movieGalleryItem}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={s.movieGalleryItemImage}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                      : notFoundImg
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
