import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import AppContainer from './app/components/AppContainer'
import rootReducer from './app/actions-reducers/reducers'

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('Stackathon', () => App);
