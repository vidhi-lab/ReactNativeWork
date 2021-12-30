 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { Image } from 'react-native';
 //import Icon from 'react-native-vector-icons/Iconicons';

 

import Categories from './src/Screens/Categories';
import Account from './src/Screens/Account';
import Wishlist from './src/Screens/Wishlist';
import Homescreen from './src/Screens/Homescreen';
import Mycart from './src/Screens/Mycart';
//import Login from './src/Screens/Login';



const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor: "#dc143c" ,
      tabBarActiveTintColor: "#888",
    }}
    initialRouteName='Account'>
      <Tab.Screen name="Home" component={Homescreen} 
      options={{
      tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn2.png')}
        /> 
      )
      }}
      />
      <Tab.Screen name="Category" component={Categories}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn6.png')}/>
      )
      }}
      />
       <Tab.Screen name="Mycart" component={Mycart}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn3.png')}/>
      )
      }}
      /> 
      <Tab.Screen name="wishlist" component={Wishlist}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn5.png')}/>
      )
      }}
      /> 
      <Tab.Screen 
      name="Account" component={Account}
      options={{
        headerTitle:'My Application',
        title:'Account',
        headerShown:false,
      tabBarIcon:({focused})=>(
        <Image source={require('./assets/images/ttn4.png')}
        style={{
          tintColor:focused?"#dc143c" :"#888"
        }}
        /> 
      )
      }}
      />
    </Tab.Navigator>
    
  </NavigationContainer>
  );
}

export default App;