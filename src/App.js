import { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import { ToastContainer } from "react-toastify";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const PageNotFound = lazy(() =>
  import(
    "./pages/PageNotFound/PageNotFound" /* webpackChunkName: "page-not-found" */
  )
);

const App = () => (
  <>
    <ToastContainer autoClose={2000} theme="dark" />
    <AppBar />

    <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/page-not-found">
            <PageNotFound />
          </Route>
          <Redirect to="/page-not-found" />
        </Switch>
      </Suspense>
    </Container>
  </>
);

export default App;
