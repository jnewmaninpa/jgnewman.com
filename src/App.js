import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  function Button({ text }) {
    return (
      <div className="button">
        <button>{text}</button>
      </div>);
  }

  function HomePage() {
    return (
      <div className="homepage-container">
        <h1>Justin Newman</h1>
        <p>This is a test landing page that will be updated soon...</p>
      </div>);
  }

  return (
    <div className="container">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <h1>About Justin</h1>
            <p>He is looking for a new GF who actually helps him</p>
          </Route>
          <Route path="/">
            <HomePage />
            <Button text="test"></Button>
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
