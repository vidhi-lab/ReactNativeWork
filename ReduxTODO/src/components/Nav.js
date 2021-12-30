import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edit from '../Screens/Edit';
import Homescreen from '../Screens/Homescreen';
const Stack = createNativeStackNavigator();
export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homescreen} />
                    <Stack.Screen name="Edit screen" component={Edit} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
