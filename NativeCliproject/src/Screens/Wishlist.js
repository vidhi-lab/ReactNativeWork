import React from "react";
import {View,Text, Button,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Wishlist=({navigation})=>
{
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt:
    {
        fontSize:30
    },
    container:
    {
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent: 'center',
        position:'absolute'
    },
    container2:
    {
        backgroundColor:'green',
        height:100,
        width:100,
    }
});

export default Wishlist;