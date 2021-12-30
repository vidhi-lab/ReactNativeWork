import React, { Component } from 'react'
import { Text, Alert, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Signup from '../Screens/Signup';
import Asyncstoragepractice from '../Screens/Asyncstoragepractice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();


const Navigation = () => {
  alertperform = (nav) =>
    Alert.alert(
      "Hold on",
      'Do you want to quit',
      [
        {
          text: 'YES',
          onPress: async() =>{
          try {
            await AsyncStorage.clear()
            Alert.alert('LOGOUT','Logout successfully')
          } catch(e) {
            // clear error
          }
          nav.navigate('Signupscreen')
        }

        },
        {
          text: 'NO',
          onPress: () => null
        }
      ]
    );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signupscreen'>
        <Stack.Screen
          name="Home" component={HomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Text 
              onPress={()=>alertperform(navigation)}>LOGOUT</Text>
            )
          })}
        />
        <Stack.Screen
         name="Signupscreen" component={Signup}
         options={{
           headerShown:false,
           headerLeft:null
         }} />
        <Stack.Screen
          name="Async" component={Asyncstoragepractice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppNavigator = () => {
  return (
    <Navigation />

  )
}



export default AppNavigator;