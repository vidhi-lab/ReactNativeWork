import React, { Component } from 'react'
import { Text,
View ,
StyleSheet,
Dimensions,
Image, 
} from 'react-native'
import MapView, { Marker} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';

// If you click on map then it gives info about latitude and longitude

const {width,height}=Dimensions.get('window');

export default class Mapview1 extends Component {

            state={
                
                region:{
                        latitude: 29.0970110,
                        longitude: 77.2730010,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
            
            }}
        

        showInput=e=>
        {
            // console.log(e.nativeEvent)
            this.setState({
                value:JSON.stringify(e.nativeEvent)
            })
        }
        


    render() {
        return (
            <View style={styles.container}>
                <MapView 
                onPress={this.showInput}
                style={styles.map}
                initialRegion={this.state.region}
                >
                <Marker 
                style={{width:26,height:28}}
                coordinate={{
                    latitude:this.state.region.latitude,
                    longitude:this.state.region.longitude
                }}>
                {/* <Image style={styles.mark} 
                source={require('../Screens/images/map2.png')}/> */}
                </Marker>
                {/* <Text style={styles.heading}>{this.state.value}</Text> */}
                </MapView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    map:{
    width: width,
    height: height,
    },
    container:
    {
        flex:1
    },
    imgcontainer:
    {
        top:330,
        left:150,
        marginLeft:-24,
        marginTop:-48,
        position:"absolute"
    },
    img:
    {
        height:height/20,
        width:width/12
    },
    heading:
    {
        fontSize:15,
        height:height/5,  
        fontWeight:'bold',
        width:width-100,
        marginTop:500,
        marginHorizontal:40
    },
    mark:
    {
        width:26,
        height:28
    }
});
