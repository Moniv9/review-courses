import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { CourseList } from "./pages/course-list";
import { CourseDetail } from "./pages/course-detail";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "./style.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/courses/:topic">
          <CourseList />
        </Route>
        <Route path="/course/detail/:id">
          <CourseDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
