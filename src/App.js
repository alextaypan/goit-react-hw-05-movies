import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "module";
import NotFoundPage from "module";

function App() {
  return (
    <div>
      <ToastContainer theme="colored" autoClose={2000} />
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
