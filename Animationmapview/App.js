import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Mapview1 from './src/Screens/Mapview1'
//import Animation from './src/Screens/Animation';
import Multilocation from './src/Screens/Multilocation';
import Gesturehandler from './src/Screens/Gesturehandler';
import Changelocation from './src/Screens/Changelocation'

export default class App extends Component {
  render() {
    return (
      // <Mapview1/>
      // <Gesturehandler/>
      // <Multilocation/>
      <Changelocation/>
    )
  }
}
