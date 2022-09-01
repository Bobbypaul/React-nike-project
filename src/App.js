import React from "react";
import Catergory from "./Category";
import Footer from "./Footer";
import Heroes from "./Heroes";
import Nav from "./Nav";
import Slide from "./Slide";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="app-con">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Heroes />
            <Slide />
            <Catergory />
            <Footer />
          </Route>

          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
