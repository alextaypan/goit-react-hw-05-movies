// import s from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
);
