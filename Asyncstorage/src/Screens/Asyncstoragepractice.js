import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'


export class Asyncstoragepractice extends Component {

    state={
        userName:'',
        password:''
    };

    getdata=async()=>
    {
        await AsyncStorage.setItem('name','vidhi');
        const user =await AsyncStorage.getItem('name');
        this.setState({
            userName:user
        });
        console.log('name is ',userName);
    }

    
        setname=async()=>
        {
        var item={name:'vidhi',password:'1234'};
        await AsyncStorage.setItem('user',JSON.stringify(item));
        const user=await AsyncStorage.getItem('user');
        const parseUser=JSON.parse(user);
        console.log('parseUser',parseUser);
        this.setState({
            userName:parseUser.name,
            password:parseUser.password
        })
        console.log('user',this.state.userName,this.state.password);
        
    }
    

    render() {
        return (
            <SafeAreaView>
                <Text> textInComponent </Text>
                <TouchableOpacity onPress={this.getdata}>
                    <Text>press me</Text>
                </TouchableOpacity>
                <Text>xyz - {this.state.userName}</Text>
                {/* <Text>xyz - {password}</Text> */}
            </SafeAreaView>
        )
    }
}

export default Asyncstoragepractice;
