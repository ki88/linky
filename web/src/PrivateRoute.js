import React from 'react';
import { Route } from 'react-router-dom';
import auth from './services/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!auth.isAuthenticated) {
    window.location.href = '/login';
    return <></>;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};
