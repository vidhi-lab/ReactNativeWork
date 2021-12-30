import React, { useState } from "react";
import {View,TextInput,TouchableOpacity,Text,StyleSheet,Dimensions,Image,Modal} 
from "react-native"
//import RadioForm from "react-native-simple-radio-button";
//import CheckBoxx from "@react-native-community/checkbox";


const {height,width}=Dimensions.get('window')


const Join = () => {
    return (
        <View>
        
        <View style={styles.modalcontainer}>
        <View style={styles.mod}>
        </View>
            <TextInput style={styles.modalinput}
         placeholder="First Name">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Last Name"
         keyboardType="name-phone-pad">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Your Email"
         keyboardType="name-phone-pad">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Password"
         keyboardType="name-phone-pad">
        </TextInput>
        </View>
        
        
        <View style={styles.modalcontainer8}>
            <TouchableOpacity>
                <Text style={{color:'white'}}>Join now</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.line6}/>
        <View style={styles.modalcontainer4}>
        <TouchableOpacity style={styles.modaltouch}>
            <Image source={require('../Screens/imagees1/google.png')}/>
            <Text style={styles.modaltxt}>Sign in with Google</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.modalcontainer5}>
        <TouchableOpacity style={styles.modaltouch}>
            <Image source={require('../Screens/imagees1/fb.png')}/>
            <Text style={styles.modaltxt1}>Sign in with Facebbok</Text>
        </TouchableOpacity>
         </View>
         <View style={styles.modalcontainer6}>
        <TouchableOpacity style={styles.modaltouch}>
            <Image source={require('../Screens/imagees1/apple3.png')}/>
            <Text style={styles.modaltxt1}>Sign in with Apple</Text>
        </TouchableOpacity>
         </View>
         
        </View>
        
    )
}
const styles = StyleSheet.create({
    modalcontainer:
    {
        paddingTop:50,
        paddingLeft:30,
    },
    modalinput:
    {
        borderWidth:1,
        height:height/20,
        width:width/1.2,
        borderColor:'#d3d3d3',
        borderRadius:2,
        marginBottom:20
    },
    modalcontainer2:
    {
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    modalcontainer3:
    {
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        width:width/1.2,
        backgroundColor:'#000',
        
    },
    line6:
    {
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
        paddingTop:20,
        width:width/-1
    },
    modalcontainer4:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        marginHorizontal:27
    },
    modaltouch:
    {
        flexDirection:'row',
    },
    modaltxt:
    {
        marginHorizontal:10
    },
    modalcontainer5:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        marginHorizontal:27,
        backgroundColor:'#4169e1'
    },
    modalcontainer6:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        marginHorizontal:27,
        backgroundColor:'#000'
    },
    modaltxt1:
    {
        marginHorizontal:10,
        color:'white'
    },
    modalcontainer7:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:1,
        marginHorizontal:27,
        borderColor:'#888'
        
    },
    mod:
    {
        paddingBottom:10,
        marginHorizontal:270
    } ,
    modalcontainer8:
    {
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        width:width/1.2,
        backgroundColor:'#000',
        marginHorizontal:30,
        height:height/15
    },
    phonemain:
    {
        alignItems:'center',
        marginTop:10,
    },
    phonecontainer:
    {
        flexDirection:'row',
        width:width-30,
        borderWidth:1,
        borderColor:'#d9d9d9'
    },
    phoneview:
    {
        width:140,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    phoneimage:
    {
        width:25,
        height:25,
        borderRadius:50
    },
    phonetext:
    {
        fontSize:25,
        fontWeight:'200',
        color:'#d9d9d9'
    },
    phoneinput:
    {
        width:width-140,
        height:50,
        fontSize:15
    },
    radiocontainer:
    {
        width:210,
        height:50,
        marginTop:10,
        marginLeft:15,
        justifyContent: 'center',
    },
    radio:
    {
        justifyContent:'space-between'
    },
    maincheckbox:
    {
        alignItems:'center',
        marginVertical:10,
    },
    checkcontainer:
    {
        flexDirection:'row',
        width:width-30
    },
    check:
    {
        height:15
    }
});

export default Join
