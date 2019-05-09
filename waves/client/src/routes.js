import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </Layout>
  );
};

export default Routes;

