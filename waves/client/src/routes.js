import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop';
import ProductDetail from './components/Products';

import UserDashboard from './components/User';
import Cart from './components/User/Cart';
import Profile from './components/User/Profile';

import AddProduct from './components/Admin/AddProduct';
import ManageCategories from './components/Admin/ManageCategories';
import SiteInfo from './components/Admin/SiteInfo';

const Routes = () => {
  // second arg in Auth comp:
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
        <Route path="/products/:id" component={Auth(ProductDetail, null)} exact />

        <Route path="/user/dashboard" component={Auth(UserDashboard, true)} exact />
        <Route path="/user/cart" component={Auth(Cart, true)} exact />
        <Route path="/user/profile" component={Auth(Profile, true)} exact />

        <Route path="/admin/add_product" exact component={Auth(AddProduct, true)} />
        <Route path="/admin/manage_categories" exact component={Auth(ManageCategories, true)} />
        <Route path="/admin/site_info" exact component={Auth(SiteInfo, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;

