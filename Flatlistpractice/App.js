import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import Listitems from './src/Screens/Listitems'
import Flatlistitems from './src/Screens/Flatlistitems';
import FlatlistAPI from './src/Screens/FlatlistAPI';
import Radiocheckboxes from './src/Screens/Radiocheckboxes';
import Radiocheckboxes2 from './src/Screens/Radiocheckboxes2';
import Checkboxes from './src/Screens/Checkboxes';
import Modalview from './src/Screens/Modalview';
import Asyncapi from './src/Screens/Asyncapi';
import Data from './src/Screens/Data'


export default class App extends Component {
  render() {
    return (
      <Data/>
    )
  }
}
