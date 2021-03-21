import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
