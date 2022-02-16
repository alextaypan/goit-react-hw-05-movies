import { useRouteMatch, useLocation, NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./MovieNavigation.module.scss";

const MovieNavigation = () => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <>
      <b>Additional information:</b>

      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${match.url}${routes.cast}`,
              state: { ...location.state },
            }}
            className={s.link}
            activeClassName={s["link--active"]}
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
            className={s.link}
            activeClassName={s["link--active"]}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MovieNavigation;
