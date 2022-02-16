import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";
import s from "./HomePage.module.scss";

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const movies = await api.fetchTrends();
      setTrends(movies);
    } catch (error) {
      console.error("Smth wrong with homepage trends fetch", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      {trends && <MovieList movies={trends} />}
      {isLoading && <Loader />}
    </>
  );
};

export default HomePage;
