import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";




const { height, width } = Dimensions.get("window");


class Homescreen extends Component{


    state={
        button1:false,
        button2:false,
        button3:false,
        button4:false,
    }

    render(){
        const{button1,button2,button3,button4}=this.state
        return (
          <View style={styles.txtcontainer}>
            <Text style={styles.txt}>Welcome to AndroidTV</Text>
           
          
            <View style={styles.container}>
            
              <TouchableOpacity  
                onFocus={() => this.setState({button1:true})}
                onBlur={() => this.setState({button1:false})}
                activeOpacity={0.9}
                style={[
                  styles.button,
                  {
                    borderColor: button1 ? "#9400d3" : "#00ffff",
                  },
                  {
                    transform: button1 ? [{ scaleX: 1.2 }] : null,
                  },
                ]}>
                <Text style={styles.buttonText}>Youtube</Text>
              </TouchableOpacity>
              <TouchableOpacity  
                onFocus={() => this.setState({button2:true})}
                onBlur={() => this.setState({button2:false})}
                activeOpacity={0.9}
                style={[
                  styles.button,
                  {
                    borderColor: button2 ? "#9400d3" : "#00ffff",
                  },
                  {
                    transform: button2 ? [{ scaleX: 1.2 }] : null,
                  },
                ]}>
                <Text style={styles.buttonText}>Netflix</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onFocus={() => this.setState({button3:true})}
                onBlur={() => this.setState({button3:false})}
                activeOpacity={0.9}
                style={[
                  styles.button,
                  {
                    borderColor: button3 ? "#9400d3" : "#00ffff",
                  },
                  {
                    transform: button3 ? [{ scaleX: 1.2 }] : null,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Hotstar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onFocus={() => this.setState({button4:true})}
                onBlur={() => this.setState({button4:false})}
                activeOpacity={0.9}
                style={[
                  styles.button,
                  {
                    borderColor: button4 ? "#9400d3" : "#00ffff",
                  },
                  {
                    transform: button4 ? [{ scaleX: 1.2 }] : null,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Zee 5</Text>
              </TouchableOpacity>
            </View>
            </View>
          );
        };
    }


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection:'row',
    
  },
  button: {
    backgroundColor: "#00ffff",
    height: height / 15,
    width: width / 8,
    marginBottom: height / 30,
    borderRadius: 5,
    borderColor: "#00ffff",
    borderWidth:1,
    marginRight:20,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize:18,
    fontWeight:'bold'
  },
  txt:
  {
    fontSize:30,
    fontWeight:'600',
    color:'#000'
  },
  txtcontainer:
  {
    marginTop:60,
    alignItems:'center',
    justifyContent: 'center',

  }
});

export default Homescreen;
