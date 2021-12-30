import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Homescreen from './src/Screens/Homescreen';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import Nav from './src/Components/Nav';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Nav/>
      </Provider>
    )
  }
}
