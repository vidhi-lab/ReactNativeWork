import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,
TextInput,TouchableOpacity,Image,
KeyboardAvoidingView,ScrollView} from 'react-native'


const{height,width}=Dimensions.get('window');

export class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
            <TextInput style={styles.modalinput}
            placeholder="Your Email Address">
            </TextInput>
            <TextInput style={styles.modalinput}
            placeholder="Password"
            keyboardType="name-phone-pad">
                </TextInput>
            <View style={styles.modalcontainer2}>
            <Text>Forgot Password?</Text>
            </View>
            <View style={styles.modalcontainer3}>
            <TouchableOpacity>
                <Text style={{color:'white'}}>Sign In</Text>
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

         <View style={styles.modalcontainer7}>
        <TouchableOpacity style={styles.modaltouch}>
            <Text style={{color:'#888'}}>Don't have an account?</Text>
            <TouchableOpacity style={styles.modaltouch1}>
            <Text style={styles.modaltxt2}>join</Text>
            </TouchableOpacity>
        </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    modalinput:
    {
        borderWidth:1,
        height:height/16,
        width:width/1.2,
        borderColor:'#d3d3d3',
        borderRadius:2,
        marginBottom:20,
        marginLeft:30,
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
        marginLeft:30
        
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
    container:
    {
        marginTop:55
    }
});

export default Signup
