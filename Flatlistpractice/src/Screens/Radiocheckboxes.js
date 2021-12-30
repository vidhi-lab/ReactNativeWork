import React, { Component } from 'react';
import { Text, TouchableOpacity, View ,Image,StyleSheet} from 'react-native';




export default class Radiocheckboxes extends Component {
     state={
         data:['on','off'],
         check:false,
     }
     
    
    render() {
        return (
            <View style={styles.maincontainer}>
                        <View style={styles.mapcontainer}>
                        {
                            this.state.check===key?
                            <TouchableOpacity style={styles.radiobutton}>
                            <Text style={styles.radiotxt}>{item}</Text>
                            <Image 
                             source={require('../../src/Screens/assets/checked.png')}/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={()=>this.setState({check:key})}
                            style={styles.radiobutton}>
                            <Text style={styles.radiotxt}>{item}</Text>
                            <Image source={require('../../src/Screens/assets/checked.png')}/>
                            </TouchableOpacity>
                        }
                        </View>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex:1,
        marginTop:30,
        marginLeft:30
    },
    mapcontainer:
    {
       paddingBottom:10 
    },
    radiotxt:
    {
        fontSize:18
    }
});
