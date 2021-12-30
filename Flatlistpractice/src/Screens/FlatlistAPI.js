import React, { Component } from 'react'
import { Text, View,StyleSheet, Button } from 'react-native'

export default class FlatlistAPI extends Component {

    state = {
        apilist:[]
    }

    fetchapi = (pos,error) => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data1 =>{
                this.setState({
                    apilist:data1.data
                })
                console.log(this.state.apilist.map((item)=>{
                    item.email
                })     
            )
            }
            )
    }

    render() {
        const{apilist}=this.state
        return (
            <View style={{flex:1,marginTop:40}}>
                {
                    apilist.map((item,index)=>{
                        return(
                            <Text key={index}>{item.email}</Text>
                        )
                    })
                }
                <Button title="press" onPress={()=>this.fetchapi()}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    

});
