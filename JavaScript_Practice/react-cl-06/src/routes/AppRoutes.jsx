import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Emails from "../pages/Emails";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={"/about"} component={About} />
      <Route path={"/emails"} component={Emails} />
      <Route path={"/"} component={Home} />
    </Switch>
  );
};

export default AppRoutes;
