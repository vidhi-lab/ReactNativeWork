import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Noteslist from '../Screeens/Noteslist';
import Addnote from '../Screeens/Addnote';




const Stack = createNativeStackNavigator();

export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Note" component={Noteslist}
                    options={{title:'Simple Note Taker',
                    headerStyle:
                    {
                        backgroundColor:'#7fffd4',
                        height:200
                    }}} />
                    <Stack.Screen options={{title:'Add a new note',
                    headerStyle:
                    {
                        backgroundColor:'#7fffd4',
                        height:200
                    }}} 
                    name="Add" component={Addnote} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
