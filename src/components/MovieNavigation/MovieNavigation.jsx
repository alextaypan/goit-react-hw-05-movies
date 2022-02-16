import { useRouteMatch, useLocation, NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./MovieNavigation.module.scss";

const MovieNavigation = () => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <>
      <b>Additional information:</b>

      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={{
              pathname: `${match.url}${routes.cast}`,
              state: { ...location.state },
            }}
            className={styles.link}
            activeClassName={styles["link--active"]}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}${routes.reviews}`,
              state: { ...location.state },
            }}
            className={styles.link}
            activeClassName={styles["link--active"]}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MovieNavigation;
