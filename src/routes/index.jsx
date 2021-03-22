import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' exact component={Home} isPrivate />
        <Route path='/favorites' exact component={Favorites} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
