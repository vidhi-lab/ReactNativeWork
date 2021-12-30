import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Fetchapi from './src/Screens/Fetchapi';

export default class App extends Component {
  render() {
    return (
      <View>
       <Fetchapi/>
      </View>
    )
  }
}
