import React, { Component } from 'react'
import { Text,
 View ,
  SafeAreaView,
  StyleSheet,
    Dimensions,
    TextInput,
  TouchableOpacity,
  Image,
  Alert,
KeyboardAvoidingView,
ScrollView} from 'react-native'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  //import HomeScreen from '../Screens/HomeScreen';

const{width,height}=Dimensions.get('window');

export default class Signup extends Component {
    state={
        userName:'',
        email:'',
        phonenumber:'',
        password:'',
        confirmpassword:'',
        details:'',
        setfocus:false
    }
    button_press=async()=>
    {
        const{userName,email,phonenumber,password,confirmpassword}=this.state;
        const reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(userName==='')
        {
            Alert.alert('HOLDON!','Please fill all the fields');
        }
        else if(reg.test(email)===false)
        {
            Alert.alert("HOLDON",'Please fill correct email');
        }
        else if(phonenumber.length!=10)
        {
            Alert.alert('HOLDON',"Please fill phone number correct");
        }
        else if(password.length<=8)
        {
            Alert.alert('HOLDON','Please fill passowrd correct');
        }
        else if(password!==confirmpassword)
        {
            Alert.alert("HOLDON",'Password do not match');
        }
        else{
            var user_details={
                userName:this.state.userName,
                email:this.state.email,
                phonenumber:this.state.phonenumber,
                password:this.state.password
            };
            console.log('UserValue',JSON.stringify(user_details));
            await AsyncStorage.setItem('UserValue',JSON.stringify(user_details));
                this.props.navigation.navigate('Home'
                )
                this.setState({
                    userName:'',
                    email:'',
                    phonenumber:'',
                    password:'',
                    confirmpassword:'',
                })
        }
    }
    

    render() {
        return (
            
            <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
            <ScrollView showsVerticalScrollIndicator={false}>
             <View style={styles.container2}>
                <Text style={styles.heading}>
                    Let's Get Started!
                </Text>
                <Text style={styles.heading2}>
                    Create an account to Q Allure to get all features
                </Text>
                <View>
                <Image style={styles.img}
                source={require('../Screens/assets/user.png')}/>
                <TextInput style={styles.firstinput}
                placeholder="John Williams"
                value={this.state.userName}
                onChangeText={(text)=>{this.setState({userName:text});
                }}
                >
                </TextInput>
                </View>
                <View>
                <Image style={styles.img}
                source={require('../Screens/assets/email.png')}/>
                <TextInput style={styles.firstinput2}
                placeholder="Email"
                value={this.state.email}
                onChangeText={(text)=>{this.setState({email:text})
                }}
                >
                </TextInput>
                </View>
                <View>
                <Image style={styles.img}
                source={require('../Screens/assets/phone.png')}/>
                <TextInput style={styles.firstinput2}
                placeholder="PhoneNumber"
                value={this.state.phonenumber}
                onChangeText={(text)=>{this.setState({phonenumber:text})
                }}
                >
                </TextInput>
                </View>
                <View>
                <Image style={styles.img}
                source={require('../Screens/assets/pass.png')}/>
                <TextInput style={styles.firstinput2}
                placeholder="Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text)=>{this.setState({password:text})
                }}
                >
                </TextInput>
                </View>
                <View>
                <Image style={styles.img}
                source={require('../Screens/assets/pass.png')}/>
                <TextInput style={styles.firstinput2}
                placeholder="ConfirmPassword"
                secureTextEntry={true}
                value={this.state.confirmpassword}
                onChangeText={(text)=>{this.setState({confirmpassword:text})
                }}
                >
                </TextInput>
                </View>
                <TouchableOpacity style={styles.button1}
                onPress={this.button_press}
                >
                    <Text style={styles.button1txt}>
                    CREATE
                    </Text>
                </TouchableOpacity>
                <View style={styles.container3}>
                <Text style={{fontSize:15}}>
                    Already have an account?
                </Text>
                <TouchableOpacity 
                 style={styles.button2}>
                    <Text style={styles.button2txt} >Login Here</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    txt:
    {
        fontSize:15
    },
    container:
    {
        backgroundColor:'#dcdcdc',
        height:height,
        width:width
    },
    container2:
    {
        height:height/1.1,
        width:width/1.1,
        backgroundColor:'white',
        marginHorizontal:16,
        marginVertical:30,
        borderRadius:40,
        zIndex:-1
    },
    heading:
    {
        alignSelf:'center',
        marginTop:90,
        fontSize:25,
        fontWeight:'600'
    },
    heading2:
    {
        alignSelf:'center',
        marginTop:10,
        color:'#888'
    },
    firstinput:
    {
        alignSelf:'center',
        borderRadius:30,
        borderWidth:2,
        width:width/1.4,
        marginTop:25,
        height:height/15,
        borderColor:'#dcdcdc',
        paddingLeft:40
    },
    firstinput2:
    {
        alignSelf:'center',
        borderRadius:30,
        borderWidth:2,
        width:width/1.4,
        marginTop:25,
        height:height/15,
        borderColor:'#dcdcdc',
        paddingLeft:40
    },
    button1:
    {
        alignSelf:'center',
        borderRadius:20,
        borderWidth:1,
        marginTop:30,
        height:height/15,
        width:width/2.3,
        backgroundColor:'#4169e1',
        borderColor:'white'
    },
    button1txt:
    {
        alignSelf:"center",
        marginTop:10,
        color:'white',
        fontSize:20,
        fontWeight:'600'
    },
    container3:
    {
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
        justifyContent: 'center',
    },
    button2:
    {
        marginLeft:10,
    },
    button2txt:
    {
        color:"#4169e1",
        fontSize:15,
        fontWeight:'600'
    },
    img:
    {
        marginHorizontal:50,
        marginTop:35,
        position:'absolute',
        zIndex:2
    },
    
    
    
});