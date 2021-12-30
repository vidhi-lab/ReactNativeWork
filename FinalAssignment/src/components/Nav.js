import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listscreen from '../screens/Listscreen'
import ScreenIdea from '../screens/ScreenIdea'
import PersonalScreen from '../screens/PersonalScreen'
import Workscreen from '../screens/Workscreen'
import Homescreen from '../screens/Homescreen';
import Viewnotescreen from '../screens/Viewnotescreen';
import Modalcontainer from '../screens/Modalcontainer';


const Stack = createNativeStackNavigator();
export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Homescreen} />
              {/* <Stack.Screen name="Modal" component={Modalcontainer} /> */}
              <Stack.Screen name="Personal" component={PersonalScreen} />
              <Stack.Screen name="List" component={Listscreen} />
              <Stack.Screen name="Ideas" component={ScreenIdea} />
              <Stack.Screen name="Work" component={Workscreen} />
              <Stack.Screen name="View" component={Viewnotescreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    }
}
