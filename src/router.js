import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;
