import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoFoundView from "../../components/NoFoundView/NoFoundView";
import { Loader } from "../../components/Loader/Loader";
import s from "./Cast.module.css";
import { toast } from "react-toastify";

import * as apiService from "../../services/moviesApi";
import notFoundImg from "../../images/notFound.png";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    apiService
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          toast.info("There are no cast for this movie ");
          return;
        }
        setCast(cast);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError("Something went wrong. Try again.");
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {Status.Pending && <Loader />}
      {status === Status.REJECTED && <NoFoundView message={error} />}

      <ul className={s.cast}>
        {status === Status.RESOLVED &&
          cast.map((cast) => (
            <li key={cast.cast_id} className={s.item}>
              <img
                className={s.photo}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w400/${cast.profile_path}`
                    : notFoundImg
                }
                alt={cast.name}
              />
              <h2 className={s.name}>{cast.name}</h2>
              <p className={s.character}>{cast.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
