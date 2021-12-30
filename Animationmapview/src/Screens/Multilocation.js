import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet,Image} from 'react-native'
import MapView ,{ Marker } from 'react-native-maps';

const {height,width}=Dimensions.get('window');


const locations_static=[
    {
        latitudeval:29.11051,
        longitudeval:77.26421,
        
    },
    {
        latitudeval:30.1105009,
        longitudeval:70.2642792,
        
    },
];

export default class Multilocation extends Component {
    
    state = {
        region: {
          latitude: 29.109575,
          longitude: 77.260773,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
      };

    render() {
        const{region}=this.state
        return (
            <View style={styles.container}>
        <MapView
          provider={null}
          mapType={'standard'}
          loadingEnabled={true}
          showsTraffic={true}
          showsBuildings={true}
          style={styles.map}
          initialRegion={region}>
          {locations_static.map((arr, i) => (
            <Marker 
              key={i}
              coordinate={{
                latitude: arr.latitudeval,
                longitude: arr.longitudeval,
              }}
              // image={require('./images/map2.png')}
            />
          ))}
        </MapView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: height,
          
    },
    map:
    {
        top:0,
        bottom:0,
        right:0,
        left:0,
        position:'absolute'
    },
    mark:
    {
        width:26,
        height:28
    }
});
