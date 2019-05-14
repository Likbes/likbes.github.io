import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop';

import UserDashboard from './components/User';

const Routes = () => {
  // in routes:
  // null - see to auth and unregistered users; 
  // false - see only unregistered users
  // true - onlu registered

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Auth(Home, null)} exact />
        <Route path="/login" component={Auth(Login, false)} exact />
        <Route path="/register" component={Auth(Register, false)} exact />
        <Route path="/shop" component={Auth(Shop, null)} exact />

        <Route path="/user/dashboard" component={Auth(UserDashboard, true)} exact />
      </Switch>
    </Layout>
  );
};

export default Routes;

