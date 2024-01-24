import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Nav from "./components/Nav";
import HomePage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#fff",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <div className="container">
      <Router>
        <ThemeProvider theme={theme}>
          <Nav />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
