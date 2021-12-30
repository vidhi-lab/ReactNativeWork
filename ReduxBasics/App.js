import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Newcomponent from './src/Screens/Newcomponent';
import { Provider } from 'react-redux';

import store from './src/redux/reducer/CounterReducer';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Newcomponent/>
      </Provider>
    )
  }
}

export default App;
