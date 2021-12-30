import React, { Component } from 'react'
import { Text, View,SafeAreaView,StyleSheet, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const{height,width}=Dimensions.get('window');
export default class Geolocations extends Component {

    state = {
            location: null,
            latitude:0,
            longitude:0
    }       

    componentDidMount(){
        this.setState({
            location:null,
            
        })
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            this.setState({
                latitude:location.latitude,
                longitude:location.longitude,
                
            })
            console.log(location.latitude,location.longitude);
            
        })
        
    }
    
    



    render() {
        const{latitude,longitude}=this.state
        return (
            <SafeAreaView style={styles.maincontainer}>
                <MapView style={styles.map}
                region={{
                    latitude:latitude,
                    longitude:longitude,
                    latitudeDelta:0.015,
                    longitudeDelta:0.0121
                }}
                >
                <Marker
                    draggable
                    coordinate={{
                        latitude:latitude,
                        longitude:longitude
                    }}
                    >
                <Callout>
                <Text>My Location</Text>
                </Callout>
                </Marker>
               
                </MapView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex:1,
        
    },
    map:{
        flex:1,
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        height:height,
        width:width
    }

});
