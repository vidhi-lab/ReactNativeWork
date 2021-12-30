import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profilescreen from '../Screens/Profilescreen';
import Homescreen from '../Screens/Homescreen';
import Gridlayoutscreen from '../Screens/Gridlayoutscreen';

const Stack = createNativeStackNavigator();


export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Follower" component={Homescreen} />
                    <Stack.Screen name="Edit Profile" component={Profilescreen} />
                    <Stack.Screen name="Grid list" component={Gridlayoutscreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
