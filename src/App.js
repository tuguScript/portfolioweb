import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
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
import Header from "./components/Header/Header";
import injectSheet from "react-jss";
import background from "./assets/background.jpg";

const styles = {
  container: {
    minHeight: "900px",
    color: "white",
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: `cover`,
    display: "grid",
    gridTemplateColumns: "256px 1fr",
    gridTemplateRows: "64px auto",
    gridTemplateAreas: `
                  'sidebar header'
                  'sidebar body'
                  `
  },
  header: {
    gridArea: "header"
  },
  body: {
    gridArea: "body",
    background: "#1E2B41"
  },
  sidebar: {
    gridArea: "sidebar"
  }
};

const App = ({ classes }) => (
  <Router>
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.sidebar}>
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
      </div>
      <div className={classes.body}>
        <Route exact path="/" render={() => <Redirect to="/about" />} />
        <Route exact path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </Router>
);

App.defaultProps = {
  backgroundImage: background,
  fontWeight: "bold",
  labelColor: "red"
};

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
