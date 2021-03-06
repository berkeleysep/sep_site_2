import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Entrepreneurship from "./pages/Entrepreneurship";
import Recruitment from "./pages/Recruitment";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route exact path="/entrepreneurship">
          <Entrepreneurship />
        </Route>
        <Route exact path="/recruitment">
          <Recruitment />
        </Route>
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
