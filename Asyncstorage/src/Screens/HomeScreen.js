import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet, 
 TouchableOpacity ,Image} from 'react-native'
import Signup from './Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Homescreen extends Component {

    state={
        userName:'',
        email:'',
        phonenumber:'',
        password:'',
        confirmpassword:'',
    }

    async componentDidMount()
    {
        const user=await AsyncStorage.getItem('UserValue')
        // console.log('Name',user);
        // console.log('Name',this.state.details);
        const users=JSON.parse(user);
        this.setState({
            userName:users.userName,
            email:users.email,
            phonenumber:users.phonenumber,
            password:users.password,
            confirmpassword:users.confirmpassword
        });
        console.log(this.state.userName,
            this.state.email,this.state.phonenumber
            ,this.state.password,this.state.confirmpassword);
        
    }
    opensignupscreen=()=>
    {
        this.props.navigation.navigate('Signupscreen');
    }
    openasyncscreen=()=>
    {
        this.props.navigation.navigate('Async');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.img}
                source={require('./assets/ttn4.png')} />
                <Text style={styles.txt}>Name - {this.state.userName}</Text>
                <Text style={styles.txt}>EMAIL - {this.state.email}</Text>
                <TouchableOpacity style={styles.button1} 
                onPress={this.opensignupscreen}>
                    <Text style={{alignSelf:'center',
                    marginTop:15,fontSize:15,fontWeight:'600'}}>
                    Go to signup screen</Text>
                </TouchableOpacity>
                
                
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    txt:
    {
        fontSize: 20
    },
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100,
        flex:1
    },
    button1:
    {
        borderWidth:2,
        width:200,
        height:50,
        borderRadius:20,
        marginTop:20,
        backgroundColor:'#4169e1',
        borderColor:'white'
    },
    img:
    {
        marginBottom:10,
        padding:20
    },
    txt:
    {
        
    }
    
});