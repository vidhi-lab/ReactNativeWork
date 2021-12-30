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
import Gridlayoutscreen from './Gridlayoutscreen';
import FlatlistAPI from './FlatlistAPI';

const { height, width } = Dimensions.get('window');

class Homescreen extends Component {

    state = {
        isPressed: true,
        isGridPressed: false
    }

    onPressedShow = () => {
        this.setState({
            isPressed: true,
            isGridPressed:false
        });
    }

    onGridPressedShow = () => {
        this.setState({
            isGridPressed: true,
            isPressed:false
        });
    }

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
                <View style={styles.innercontainer}>
                    <TouchableOpacity
                        onPress={() => this.onPressedShow()}>
                        <Image 
                        style={[styles.listimage,
                        {tintColor:this.state.isPressed?'#000':'#888'}]}
                            source={list} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onGridPressedShow()}>
                        <Image style={[styles.listimage2,
                        {tintColor:this.state.isGridPressed?'#000':'#888'}]}
                            source={gridlist} />
                    </TouchableOpacity>
                </View>
                {
                    this.state.isPressed ?
                        <FlatlistAPI/> :
                        <Gridlayoutscreen navigation={this.props.navigation}/>
                        
                }
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
    },
    innercontainer:
    {
        backgroundColor: '#d3d3d3',
        height: 40,
        flexDirection: 'row'
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
    maincontainertxt:
    {
        fontSize: 20,
        fontWeight: '600'
    },
    title:
    {
        fontWeight: 'bold'
    },
    flatlistGridcontainer:
    {
        marginLeft: 20

    }

});



const mapStateToProps = (state) => (
    {
        data: state.data
    }
)

const mapDispatchToProps = (dispatch) => ({
    getData: () => getData(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);
