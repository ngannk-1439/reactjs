import React from 'react';
import { Router, Route, withRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './api';
import { alertActions } from './actions';
import { PrivateRoute } from './components/privateRouter';
import { HomePage } from './components/homePage';
import { LoginPage } from './components/loginPage';
import { RegisterPage } from './components/registerPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    const { match } = this.props;
    return (
      <div className="col-sm-9">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <HashRouter history={history}>
          <div>
            <PrivateRoute exact path={`${match.path}/home`} component={HomePage} />
            <Route path={`${match.path}/login`} component={LoginPage} />
            <Route path={`${match.path}/register`} component={RegisterPage} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = withRouter(connect(mapState, actionCreators)(App));
export { connectedApp as App };