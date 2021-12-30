import React, { Component } from 'react'
import { Modal, Text, View } from 'react-native'
import Homescreen from './src/screens/Homescreen'
// import store from './src/Redux/Store/Storeindex'
// import { Provider } from 'react-redux'
import Modalcontainer from './src/screens/Modalcontainer'
import Nav from './src/components/Nav'
import { Provider } from 'react-redux'
import store from './src/Redux/Store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Nav/>
      </Provider>
    )
  }
}
