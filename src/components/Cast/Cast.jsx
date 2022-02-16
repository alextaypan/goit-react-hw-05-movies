import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Actor from "../Actor/Actor";
import Loader from "../Loader/Loader";

import api from "../../services/api";
import styles from "./Cast.module.scss";

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const match = useRouteMatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const { movieId } = match.params;

    setLoading(true);

    try {
      const { cast } = await api.fetchCast(movieId);
      setActors(cast);
    } catch (error) {
      console.error("Smth wrong with fetch cast on movie page", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      {actors.length > 0 ? (
        <ul className={styles.list}>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={styles.item}>
                <Actor photo={profile_path} name={name} character={character} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about actors for this movie.</p>
      )}
    </>
  );
};

export default Cast;
