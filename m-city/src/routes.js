import React from 'react';
import PropTypes from 'prop-types';
import Layout from './hoc/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoute from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signIn';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import EditMatch from './components/admin/editMatch';

const Routes = ({ user }) => {
  return (
    <Layout>
      <Switch>
        <PublicRoute
          exact
          restricted={false}
          user={user}
          component={Home}
          path="/"
        />

        <PublicRoute
          restricted
          user={user}
          path="/sign_in"
          component={SignIn}
        />

        <PrivateRoute
          user={user}
          path="/dashboard"
          component={Dashboard}
        />

        <PrivateRoute
          exact
          user={user}
          path="/admin_matches"
          component={AdminMatches}
        />

        <PrivateRoute
          user={user}
          exact
          path={'/admin_matches/edit_match'}
          component={EditMatch}
        />

        <PrivateRoute
          user={user}
          exact
          path={'/admin_matches/edit_match/:id'}
          component={EditMatch}
        />
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  user: PropTypes.object,
};

export default Routes;
