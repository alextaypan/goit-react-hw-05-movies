import PropTypes from "prop-types";

import styles from "./MoviePreview.module.scss";
import placeholder from "../../assets/images/placeholder.png";

const MoviePreview = ({ title, poster }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : placeholder;

  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <img
          src={posterUrl}
          alt={title}
          title={title}
          className={styles.poster}
        />
      </div>

      <p className={styles.text}>
        <span>{title}</span>
      </p>
    </div>
  );
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default MoviePreview;
