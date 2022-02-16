import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MoviePreview from "../MoviePreview/MoviePreview";

import routes from "../../routes";
import s from "./MovieList.module.scss";

const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <li key={id} className={s.item}>
          <Link
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
            className={s.link}
          >
            <MoviePreview
              title={title}
              poster={poster_path}
              vote={vote_average}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
