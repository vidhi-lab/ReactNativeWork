import React, { Component } from 'react'
import { Text,
View ,
StyleSheet,
Dimensions,
Image, 
} from 'react-native'
import MapView, { Callout, Marker} from 'react-native-maps'


const {width,height}=Dimensions.get('window');

export default class Mapview1 extends Component {

            state={
                
                region:{
                        latitude: 29.101134191145007,
                        longitude: 77.30081677206692,
                        
                  
            },
          }
        
    // movedrag=()=>
    // {
    //   this.setState({latitude:this.state.region.latitude=32.05721,
    //   longitude:this.state.region.longitude=72.3451})
    //   // latitude=30.05721,
    //   // longitude=72.3451
    // }
        

    render() {
        return (
            <View style={styles.container}>
                <MapView 
                onPress={this.showInput}
                style={styles.map}
                initialRegion={{
                  latitude:29.101134191145007,
                  longitude:77.30081677206692,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                >
                <Marker
                coordinate={{
                    latitude:this.state.region.latitude,
                    longitude:this.state.region.longitude
                }}
                 draggable={true}
                
                onDragEnd={(e) => {
                console.log('dragEnd', e.nativeEvent.coordinate),
                this.setState({
                  latitude:e.nativeEvent.coordinate.latitude,
                  longitude:e.nativeEvent.coordinate.longitude
                })}}
                >
                <Callout>
                <Text>
                My Location
                </Text>
                </Callout>
                </Marker>
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
