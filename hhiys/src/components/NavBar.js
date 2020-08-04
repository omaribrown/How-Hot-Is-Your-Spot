import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SampleSearch from './SampleSearch';

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/restaurant-search">See Cases Around Restaurants</Link>
            </li>
            <li>
              <Link to="/zipcode-search">See cases Around Your Zipcode</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/restaurant-search">
            <SampleSearch />
          </Route>
          <Route path="/zipcode-search">
            {alert("This page is still under construction. You are being redirected to the homepage.")}
            <SampleSearch />
          </Route>
          <Route path="/">
            {alert("This page is still under construction. You are being redirected to the homepage.")}
            <SampleSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
