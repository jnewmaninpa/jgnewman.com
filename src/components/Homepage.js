import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage-spacer"></div>
      <h1>Justin G. Newman</h1>
      <h3>
        Welcome! Site is still under developemnt but feel free to look around!
      </h3>
      <Link className="homepage-link" to="/about" color="primary">
        About
      </Link>
      <Link className="homepage-link" to="/contact">
        Contact
      </Link>
    </div>
  );
}
