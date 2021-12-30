import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Nav from './src/Components/Nav';
import Rootstore from './src/Store';
import { Provider } from 'mobx-react';
import Liststore from './src/Store/Liststore';


export default class App extends Component {
  render() {
    const rootStore= new Rootstore();
    return (
      <Provider
      listStore={rootStore.listStore}>
      <Nav/>
      </Provider>
    )
  }
}
