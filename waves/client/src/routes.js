import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/User';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Auth(Home, null)} exact />
        <Route path="/login" component={Auth(Login, false)} exact />
        <Route path="/register" component={Auth(Register, false)} exact />
        <Route path="/user/dashboard" component={Auth(UserDashboard, true)} exact />
      </Switch>
    </Layout>
  );
};

export default Routes;

