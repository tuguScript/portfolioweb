import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
const Home = () => (
  <div>
    <h2> Home </h2>
    <h2> Home </h2>
    <h2> Home </h2>
  </div>
);

const About = () => (
  <div>
    <h2> About </h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3> {match.params.topicId} </h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2> Topics </h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}> Rendering with React </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}> Components </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}> Props v.State </Link>
      </li>
    </ul>
    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3> Please select a topic. </h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Sidebar />
      <Header />

      <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/works" component={About} />
        <Route path="/contact" component={Topics} />
        <Footer />
      </div>
    </div>
  </Router>
);
export default App;
