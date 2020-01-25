import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { PrivateRoute } from './PrivateRoute';
import { Login } from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/login'} exact component={Login} />
        <PrivateRoute path={'/links/:sid?'} component={Dashboard} />
        <Redirect from={'/'} to={'/links'} />
      </Switch>
    </Router>
  );
}

export default App;
