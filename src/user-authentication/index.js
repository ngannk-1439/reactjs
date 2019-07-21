import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './api';
configureFakeBackend();

class UserAuthen extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default UserAuthen;
