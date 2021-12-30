import React, { Component } from 'react'
import { Text, View,Image,ImageBackground} from 'react-native'
import {musiclogo,guitarmusic} from './constants'
export default class Splashscreen extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.replace('Tinder')
        },2000)
    }


    render() {
        return (
            <ImageBackground
            source={guitarmusic}
            style={{height:'100%',width:'100%'}}>
                <View style={{flex:1,
                justifyContent:'center',
                alignItems:'center'}}>
                    <Image
                        source={musiclogo}
                        style={{height:100,width:100,borderRadius:20}}
                    />
                </View>
            </ImageBackground>
        )
    }
}
