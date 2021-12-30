import React, { Component } from 'react'
import {
    Text, View, SafeAreaView,
    StyleSheet, Dimensions
} from 'react-native';
import Video from 'react-native-video';

const { height, width } = Dimensions.get('window')

export default class Videosystem extends Component {

    onLoad = (data) => {
        
        const {
            audioTracks,
            textTracks,
            duration,
            naturalSize
        } = data
        console.log(naturalSize)
    }



    render() {
        return (
            <View style={styles.maincontainer}>
                <Video onLoad={this.onLoad}
                    controls={true}
                    muted={true}
                    playWhenInactive='true'
                    source={{uri:'https://sample-videos.com/video123/mp4/360/big_buck_bunny_360p_30mb.mp4'}}
                    style={styles.backgroundVideo} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
        
    },
    backgroundVideo:
    {
        height: '100%',
        width: '100%',
        position:'absolute'
        
    }
});
