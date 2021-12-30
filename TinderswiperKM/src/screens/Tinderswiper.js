import React, { Component, Suspense } from 'react'
import {
    Text, View, StyleSheet, SafeAreaView, Image,
    ImageBackground,
    Animated,
    PanResponder, Dimensions
} from 'react-native'

const WINDOW_HEIGHT = Dimensions.get('window').height
const WINDOW_WIDTH = Dimensions.get('window').width

const DATA = [
    { id: 2, uri: require('./assets/icons/saaho.jpeg') },
    { id: 3, uri: require('./assets/icons/shadow.jpeg') },
    { id: 4, uri: require('./assets/icons/legion.jpeg') },
    { id: 1, uri: require('./assets/icons/war.jpeg') },

]

export default class Tinderswiper extends Component {

    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY();
        this.state = {
            currentIndex: 0,
        }
        this.rotate = this.position.x.interpolate({
            inputRange: [-WINDOW_WIDTH / 2, 0, WINDOW_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-WINDOW_WIDTH / 2, 0, WINDOW_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })

        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-WINDOW_WIDTH / 2, 0, WINDOW_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-WINDOW_WIDTH / 2, 0, WINDOW_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })

        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-WINDOW_WIDTH / 2, 0, WINDOW_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })


        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                console.log(gestureState.dx)
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: {
                            x: WINDOW_WIDTH + 300, y: gestureState.dy
                        },
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 });
                        });
                    });
                } else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: {
                            x: -WINDOW_WIDTH - 300, y: gestureState.dy
                        },
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 });
                        });
                    });
                } else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 2,
                    }).start();
                }
            }

        })
    }







    renderImages = () => {
        return DATA.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id}
                        style={[this.rotateAndTranslate,
                        {
                            height: WINDOW_HEIGHT - 120,
                            width: WINDOW_WIDTH, padding: 10,
                            position: 'absolute'
                        }]}>

                        <Animated.View
                            style={{
                                opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }],
                                position: 'absolute', top: 50, left: 40, zIndex: 1000,
                            }}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'green',
                                color: 'green',
                                fontSize: 32,
                                fontWeight: '800',
                                padding: 10
                            }}>LIKE</Text>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }],
                                position: 'absolute', top: 50, right: 40, zIndex: 1000,
                            }}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'red',
                                color: 'red',
                                fontSize: 32,
                                fontWeight: '800',
                                padding: 10
                            }}>DISLIKE</Text>
                        </Animated.View>

                        <Image
                            style={styles.images}
                            source={item.uri}
                        />
                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View
                        key={item.id}
                        style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: WINDOW_HEIGHT - 120,
                            width: WINDOW_WIDTH, padding: 10,
                            position: 'absolute'
                        }]}>

                        <Animated.View
                            style={{
                                opacity: 0, transform: [{ rotate: '-30deg' }],
                                position: 'absolute', top: 50, left: 40, zIndex: 1000,
                            }}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'green',
                                color: 'green',
                                fontSize: 32,
                                fontWeight: '800',
                                padding: 10
                            }}>LIKE</Text>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: 0, transform: [{ rotate: '30deg' }],
                                position: 'absolute', top: 50, right: 40, zIndex: 1000,
                            }}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'red',
                                color: 'red',
                                fontSize: 32,
                                fontWeight: '800',
                                padding: 10
                            }}>DISLIKE</Text>
                        </Animated.View>

                        <Image
                            style={styles.images}
                            source={item.uri}
                        />
                    </Animated.View>
                )
            }
        }).reverse() //reverse method set images from back in to the stack
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 60 }}>

                </View>
                <View style={{ flex: 1 }}>
                    {this.renderImages()}
                </View>
                <View style={{ height: 60 }}>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    images:
    {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 20
    },
    // liketext:
    // {
    //     borderWidth: 1,
    //     borderColor: 'green',
    //     color: 'green',
    //     fontSize: 32,
    //     fontWeight: '800',
    //     padding: 10
    // },
    // liketextview:
    // {
    //     position: 'absolute',
    //     top: 50,
    //     left: 40,
    //     zIndex: 1000,
    //     transform: [{
    //         rotate: '-30deg'
    //     }],

    // },
    // disliketext:
    // {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     color: 'red',
    //     fontSize: 32,
    //     fontWeight: '800',
    //     padding: 10
    // },
    // disliketextview:
    // {
    //     position: 'absolute',
    //     top: 50,
    //     right: 40,
    //     zIndex: 1000,
    //     transform: [{
    //         rotate: '30deg'
    //     }],

    // },
});