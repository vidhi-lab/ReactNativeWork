import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tinderswiper from '../screens/Tinderswiper'
import Splashscreen from '../screens/Splashscreen';
import Animatetext from '../screens/Animatetext'

const Stack = createNativeStackNavigator();

export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen options={{headerShown:false}}
                     name="Splash"component={Splashscreen} />
                    <Stack.Screen options={{headerShown:false}}
                    name="Tinder"component={Tinderswiper} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
