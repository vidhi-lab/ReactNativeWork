import React, { Component } from 'react'
import { Text, View,SafeAreaView,Button } from 'react-native';
import Login from './Login';

export default class Signup extends Component {
    render(route) {
        return (
            <SafeAreaView>
                <Text> textInComponent </Text>
                <Button title="go to login" 
                    onPress={() => this.props.navigation.navigate('Log')}
                />
                <Text>abc:{this.route.params.name}</Text>
            </SafeAreaView>
        )
    }
}
