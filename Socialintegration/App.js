import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Googleauth from './src/Screens/Googleauth'

export default class App extends Component {
  render() {
    return (
      <View>
       <Googleauth/>
      </View>
    )
  }
}
