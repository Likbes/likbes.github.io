import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./containers";

const Routes = () => (
  <Switch>
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
