import PropTypes from "prop-types";

import s from "./Movie.module.scss";
import placeholder from "../../assets/images/placeholder.png";

const Movie = ({ movie }) => {
  const { title, vote_average, poster_path, overview, genres } = movie;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : placeholder;

  return (
    <div className={s.article}>
      <div className={s.thumb}>
        <img src={posterUrl} alt={title} title={title} className={s.poster} />
      </div>

      <div>
        {title && <h1 className={s.title}>{title} </h1>}

        <p className={s.score}>
          <b className={s.label}>User score:</b>
          {vote_average ? <span>{vote_average * 10}%</span> : <span>N/A</span>}
        </p>

        <p className={s.overview}>
          <b className={s.label}>Overview:</b>
          {overview ? <span>{overview}</span> : <span>N/A</span>}
        </p>

        <b className={s.label}>Genres:</b>

        {genres.length > 0 ? (
          <ul className={s.genresList}>
            {genres.map(({ id, name }) => (
              <li key={id} className={s.genresItem}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <span>N/A</span>
        )}
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default Movie;
