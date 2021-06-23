import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
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
          <h1>Sample About Page</h1>
          <p>Testing Agnular Router with DO App</p>
        </Route>
        <Route path="/">
          <h1>Justin Newman</h1>
          <p>This is a test landing page that will be updated soon...</p>
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
