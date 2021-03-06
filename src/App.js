import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
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
import { List, Icon } from "antd";
import colors from "./utils/colors";

const styles = {
  container: {
    minHeight: "900px",
    color: "white",
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: `cover`,
    display: "grid",
    gridTemplateColumns: "256px auto",
    gridTemplateRows: "64px auto 64px",
    gridTemplateAreas: `
                  'sidebar header'
                  'sidebar body'
                  'sidebar footer'
                  `
  },
  header: {
    gridArea: "header"
  },
  body: {
    gridArea: "body",
    background: "#1E2B41",
    padding: "0px 30px 30px 30px"
  },
  footer: {
    gridArea: `footer`
  },
  sidebar: {
    gridArea: "sidebar"
  }
};

const data = [
  { desc: "About", link: "/about", icon: "idcard" },
  { desc: "Works", link: "/works", icon: "fork" },
  { desc: "Contact", link: "/contact", icon: "contacts" }
];

const App = ({ classes }) => (
  <Router>
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <Sidebar>
        <List
          split={false}
          size="large"
          // bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <NavLink
                style={{ color: "white" }}
                to={item.link}
                activeStyle={{
                  fontWeight: "bold",
                  color: `${colors.PRIMARY}`
                }}
              >
                <Icon
                  type={item.icon}
                  style={{ fontSize: 14, marginRight: "20px", color: "white" }}
                />

                {item.desc}
              </NavLink>
            </List.Item>
          )}
        />
      </Sidebar>
      <div className={classes.body}>
        <Route exact path="/" render={() => <Redirect to="/about" />} />
        <Route exact path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
      </div>
      <div className={classes.footer}>
        <Footer />
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
