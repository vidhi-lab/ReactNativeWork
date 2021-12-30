import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigation from './src/Components/Navigation'
import Asyncstorage from './src/Screens/Asyncstoragepractice';
import HomeScreen from './src/Screens/HomeScreen';
import Signup from './src/Screens/Signup';
import Asyncstoragepractice from './src/Screens/Asyncstoragepractice';
import AppNavigator from './src/Components/Navigation';
// import HextoRGB from './src/Screens/HexToRGB';
// import HEXtoRGB2 from './src/Screens/HEXtoRGB2';
// import Screenotp from './src/Screens/Screenotp';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* <Signup/> */}
        {/* <HomeScreen/> */}
        {/* <Asyncstoragepractice/> */}
        <AppNavigator/>
        
      </View>
    )
  }
}
