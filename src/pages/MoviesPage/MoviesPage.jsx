import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { toast } from "react-toastify";

import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

import api from "../../services/api";
import "react-toastify/dist/ReactToastify.css";

const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const { query } = queryString.parse(search);

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    getMovies();
    // eslint-disable-next-line
  }, [searchQuery]);

  const getMovies = async () => {
    setLoading(true);

    try {
      const results = await api.fetchMoviesBySearch(searchQuery, page);

      if (results.length === 0) {
        toast.info(`No results were found for ${searchQuery}!`);
      }

      setMovies(results);
      setLoading(true);
    } catch (error) {
      console.error("Smth wrong with search fetch", error);
      setError({ error });
    } finally {
      setLoading(false);
    }
  };

  const onChangeQuery = (query) => {
    setMovies([]);
    setSearchQuery(query);
    setPage(1);
    setError(null);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <SearchForm onSearch={onChangeQuery} />

      <MovieList movies={movies} />

      {isLoading && <Loader />}
    </>
  );
};

export default MoviesPage;
