import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppBar } from "./components/AppBar/AppBar";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const NotFoundPage = lazy(() =>
  import("./views/NotFoundPage" /* webpackChunkName: "not-found-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

export default function App() {
  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
