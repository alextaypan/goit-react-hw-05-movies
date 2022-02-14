import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" autoClose={2000} />
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        {/* <Route path="/movies" />
        <Route path="/:movieId/cast" />
        <Route path="/:movieId/reviews" /> */}
      </Switch>
    </div>
  );
}

export default App;
