import React from "react";
import 'font-awesome/css/font-awesome.min.css';

import {
  NavLink,
  Redirect,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import About from "./views/About";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => (
  <Router>
    <div>
      <Sidebar>
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Contact
        </NavLink>
      </Sidebar>
      <div className="body">
        <Route exact path="/" render={() => <Redirect to="/about" />} />
        <Route exact path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </Router>
);
export default App;
