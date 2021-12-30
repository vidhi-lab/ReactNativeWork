import React, { Component } from 'react';
import { View, Text ,SafeAreaView,StyleSheet} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

  
export default class Googleauth extends Component {

    state = {
      userGoogleInfo:{},
      loaded:false
    };
  


    componentDidMount=()=>{
        GoogleSignin.configure({
            
            webClientId:
             '584280966499-rd2pun43ubg28oas64q2jt2rpgimklfq.apps.googleusercontent.com'
             
          });
    }
    signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ 
            userGoogleInfo:userInfo,
            loaded:true
           });
           console.log(userGoogleInfo)
        } 
        catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("user cancelled login flow")
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
          }
        }
      };
      
  

  render() {
    return (
      <SafeAreaView style={styles.maincontainer} >
        <GoogleSigninButton style={styles.googlebutton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
        />
        {this.state.loaded ?
        <View>
        <Text style={{marginTop:30}}>{this.state.userGoogleInfo}</Text>
        {/* <Text>{this.state.userGoogleInfo.user.email}</Text> */}
        </View>:<Text>Not SignedIn</Text>}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        justifyContent: 'center',
        alignItems:'center',
        flex:1
    },
    googlebutton:
    {
        width:192,
        height:48,
        marginTop:800
    }
});
