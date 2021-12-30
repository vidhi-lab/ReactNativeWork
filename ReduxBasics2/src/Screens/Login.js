import React, { Component } from 'react'
import { Text, View,SafeAreaView,Button,TextInput } from 'react-native'

export default class Login extends Component {
    state={
        name:''
    }
    render() {
        return (
            <SafeAreaView>
                <Button title="go to login again" 
                    onPress={() => this.props.navigation.goBack('Sign'),{
                        name:this.state.name,
                        otherparam:101
                    }}
                />
                <TextInput placeholder="enter here"
                style={{borderWidth:3}}
                onChangeText={(text)=>this.setState({name:text})}>
                </TextInput>
                <Text>abc:{this.state.name}</Text>
            </SafeAreaView>
        )
    }
}
