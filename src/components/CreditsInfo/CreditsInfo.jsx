import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/moviesApi";
import { useParams } from "react-router-dom";

export const OneMovieCredits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    fetchMovieCredits().then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {cast &&
          cast.map((el) => (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                alt={el.name}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
