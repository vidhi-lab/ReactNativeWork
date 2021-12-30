import React, { Component } from 'react'
import { Text, View,SafeAreaView,StyleSheet } from 'react-native'

const List=[
    {name:'vidhi',key:1},
    {name:'vidhan',key:2},
    {name:'vidit',key:3},
    {name:'kuttu',key:4},
    {name:'cheenu',key:5},

]
const data=List.map((item)=>{
    return item.name;
}).join('\n')

export default class Listitems extends Component {

    


    render() {
        return (
            <SafeAreaView style={styles.maincontainer}>
                <Text></Text>
                <Text style={styles.listitems}>{data}</Text>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        paddingHorizontal:20
    },
    listitems:
    {
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24
    }
});
