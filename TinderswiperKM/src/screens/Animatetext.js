import React, { Component } from 'react'
import { Text, View,Animated } from 'react-native'

export default class Animatetext extends Component {
    state={
        fontSize:new Animated.Value(20),
        rotation:new Animated.Value(0)
    }
    

    componentDidMount(){
        // Animated.loop(
        // Animated.timing(this.state.fontSize,{
        //     toValue:50,    //upto fontsize 
        //     duration:5000,  // it takes miliseconds
        // })).start()
        Animated.timing(this.state.rotation,{
            toValue:1,
            duration:5000
        }).start()
    }

    rotateText=()=>this.state.rotation.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','7200deg']
    })

    render() {
        return (
            <Animated.View 
            style={{marginTop:300,justifyContent:'center',alignItems:'center'}}>
                <Animated.Text
                 style={
                     {   fontSize:this.state.fontSize,
                         transform:[{
                         rotate:this.rotateText()
                 }]}}> 
                 Animation </Animated.Text>
            </Animated.View>
        )
    }
}
