import React, { Component } from 'react';
import * as R from 'ramda';
import { Route, withRouter, Switch } from 'react-router-dom';
import './css/index.scss';

import App from './pages/App';
import Home from './pages/Home';
import NotFound from './pages/Auth/NotFound';

// Analytics

class Routes extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/wwStudio" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </App>
    );
  };
}

export default R.compose(
  withRouter,
)(Routes);
