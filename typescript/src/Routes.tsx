import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, Counter } from "./containers";

const Routes = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/counter" component={Counter} />
  </Switch>
);

export default Routes;
