import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, withRouter
} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

const ScrollToTopFix = withRouter(ScrollToTop);

const AppRoute = () => (
  <Router>
    <ScrollToTopFix>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </ScrollToTopFix>
  </Router>
);

export default AppRoute;
