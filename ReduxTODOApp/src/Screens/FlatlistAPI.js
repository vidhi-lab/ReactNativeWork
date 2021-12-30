import React, { Component } from 'react'
import {
Text, View, SafeAreaView, StyleSheet,
TouchableOpacity, FlatList, Image, Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import store from '../Redux/Store';
import reducer from '../Redux/Reducer/Reducer';
import { getData } from '../Redux/Action/Action';
import { list, gridlist } from '../constants/index'


const { height, width } = Dimensions.get('window');

class FlatlistAPI extends Component {

    async componentDidMount() {
        await this.props.getData()
        // console.log(this.props.data.data)
    }

    render() {

        const Item = ({ dataarr }) => (
            <View style={styles.item}>
                <Image style={styles.img}
                    source={{ uri: dataarr.avatar }}></Image>
                <Text style={styles.title}>
                    {dataarr.first_name} {dataarr.last_name}</Text>
            </View>
        );

        const renderItem = ({ item }) => (
            <Item dataarr={item} />
        );


        const { data } = this.props;
        return (
            <SafeAreaView style={styles.maincontainer}>
                <View style={styles.flatlistcontainer}>
                    <FlatList
                        data={this.props.data.data}
                        renderItem={renderItem}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex:1
    },
    img:
    {
        width: 90,
        height: 80,
        borderRadius: 30,
    },
    txt:
    {
        fontSize: 20,
        color: 'skyblue',
        paddingHorizontal: 40
    },
    item:
    {
        marginTop: 10
    },
    listimage:
    {
        marginTop: 4,
        marginLeft: 120
    },
    listimage2:
    {
        marginTop: 7,
        marginLeft: 120
    },
    flatlistcontainer:
    {
        marginLeft: 30
    },

});



const mapStateToProps = (state) => (
    {
        data: state.data
    }
)

const mapDispatchToProps = (dispatch) => ({
    getData: () => getData(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(FlatlistAPI);

