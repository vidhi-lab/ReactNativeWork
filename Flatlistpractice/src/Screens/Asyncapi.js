import React, { Component } from 'react'
import { Text, View,SafeAreaView, Button } from 'react-native'

export default class Asyncapi extends Component {

    state={
        apilist:[],
        buttonhide:false
    }

    async fetchapi(){
        const data=await fetch('https://reqres.in/api/users')
        const details=await data.json();
        // console.log(details)
        this.setState({
            apilist:details.data
        })
        console.log(this.state.apilist)
        this.setState({
            buttonhide:true
        })
    }
    render() {
        const{apilist,buttonhide}=this.state
        return (
            <SafeAreaView>
            {buttonhide ? <View>{
                        apilist.map((item,index)=>{
                             return(
                                 <Text key ={index}>
                                 {item.first_name}</Text>
                             )
                        })
                }</View>:<Button title="pressme"
                onPress={()=>this.fetchapi()}/>}
            </SafeAreaView>
        )
    }
}
