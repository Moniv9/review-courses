import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { CourseList } from "./pages/course-list";
import { Header } from "./components/header";
import "./style.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/courses/:topic">
            <CourseList />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
