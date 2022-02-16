import { NavLink } from "react-router-dom";
import routes from "../../routes";

import s from "./Navigation.module.scss";

const Navigation = () => (
  <nav>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          exact
          to={routes.home}
          className={s.link}
          activeClassName={s["link--active"]}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={routes.movies}
          className={s.link}
          activeClassName={s["link--active"]}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
