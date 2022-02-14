import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" autoClose={2000} />
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {/* <Router path="/movies/:movieId" />
        <Router path="/:movieId/cast" />
        <Router path="/:movieId/reviews" />
        <Router path="/movies" /> */}
      </Switch>
    </div>
  );
}

export default App;
