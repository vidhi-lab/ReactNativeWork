import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Adddetails from '../screen/Adddetails';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();
export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="Adddetails" component={Adddetails} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
