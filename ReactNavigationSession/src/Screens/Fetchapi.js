import React, { Component } from 'react'
import { TouchableOpacity, SafeAreaView,StyleSheet,Text,
ActivityIndicator } from 'react-native'

export default class Fetchapi extends Component {

    state={
        loadingstate:false,
        data:[],
        buttonshow:true,
    }

    fetchapi=()=>
    {
        this.setState({loadingstate:this.state.loadingstate=true})
        fetch('https://reqres.in/api/users',
        {
            method:'GET'
        })
        .then(response=>response.json())
        .then((responseJson)=>
        {
            this.setState({loadingstate:this.state.loadingstate=false,
                data:responseJson})   
        })
        this.setState({buttonshow:this.state.buttonshow=false})
        
    }
    



    render() {
        return (
            <SafeAreaView style={styles.container}>
            <Text>{JSON.stringify(this.state.data)}</Text>
                {this.state.buttonshow ?(
                    <TouchableOpacity style={styles.btn1}
                onPress={this.fetchapi}>
                <Text style={{color:'white',fontWeight:'500'}}>FETCH DATA</Text>
                </TouchableOpacity>
                ):null}
                <ActivityIndicator animating={this.state.loadingstate}>
                </ActivityIndicator>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        alignItems:'center',
        justifyContent: 'center',
        marginTop:100
    },
    btn1:
    {
        borderWidth:2,
        height:40,
        width:150,
        borderRadius:10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#000'
    },

});
