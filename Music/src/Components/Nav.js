import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Audio from '../Screens/Audio';
import Video from '../Screens/Video';
import Geolocations from '../Screens/Geolocations';
import Audioscreen from '../Screens/Audioscreen';


const Tab = createBottomTabNavigator();

export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Videoscreen" component={Video} />
                    <Tab.Screen name="Maplocation" component={Geolocations} />
                    <Tab.Screen name="Audiosystem" component={Audioscreen} />  
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
