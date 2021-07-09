import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Route path={["/", "/Home"]} exact>
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
