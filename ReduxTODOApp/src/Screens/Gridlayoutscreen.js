import React, { Component } from 'react'
import {
    Text, View, SafeAreaView, StyleSheet,
    TouchableOpacity, FlatList, Image, Dimensions, Alert
} from 'react-native'
import { connect } from 'react-redux'
import store from '../Redux/Store';
import reducer from '../Redux/Reducer/Reducer';
import { getData } from '../Redux/Action/Action';
import { list, gridlist, mult } from '../constants/index'
import Profilescreen from './Profilescreen';
import Realm from 'realm';
import { User } from '../realm/schema';

const { height, width } = Dimensions.get('window');

class Gridlayoutscreen extends Component {

    state=
    {
        DeleteGridItem:false,
        Data:[]
    }

    async componentDidMount() {
        await this.props.getData()
        // console.log(this.props.data.data)
        Realm.open({
            schema: [User]
          }).then(realm => {
            const arr = realm.objects('user')
            this.setState({ Data: arr })
            console.log(Data)
          })
    }

    showProfileScreen = (dataarr) => {
        this.props.navigation.navigate('Edit Profile', dataarr)
        console.log(dataarr)
    }


    onDeleteGridItem = () => {
        this.setState({
            DeleteGridItem:true
        })
        Alert.alert("HOLD ON", "Do yo want to delete", [
            {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => this.props.removeData()
            }
        ])
        return true;
    }


    render() {
        const Item = ({ dataarr }) => (
            <View style={styles.item}>
                <TouchableOpacity onLongPress={() => this.onDeleteGridItem()}
                    onPress={() => this.showProfileScreen(dataarr)}>
                    <View>
                    {this.state.DeleteGridItem?<TouchableOpacity>
                        <Image style={styles.crossicon}
                            source={mult}/>
                    </TouchableOpacity>:null}
                    </View>

                    <Image style={styles.img}
                        source={{ uri: dataarr.avatar }}></Image>
                    <Text style={styles.title}>
                        {dataarr.first_name}
                    </Text>
                    <Text style={styles.title}>
                        {dataarr.last_name}</Text>
                </TouchableOpacity>
            </View>
        );

        const renderItem = ({item}) => (
            <Item dataarr={item} />
        );
        const { data } = this.props;
        return (
            <SafeAreaView style={styles.maincontainer}>
                <View style={styles.flatlistcontainer}>
                    <FlatList
                        data={data.data}
                        renderItem={renderItem}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
    },
    img:
    {
        width: 90,
        height: 80,
        borderRadius: 45,
        marginTop: 20,
        alignSelf: 'center'
    },
    txt:
    {
        fontSize: 20,
        color: 'skyblue',
        paddingHorizontal: 40
    },
    item:
    {
        marginTop: 30,
        borderRadius: 2,
        borderRadius: 20,
        backgroundColor: '#d3d3d3',
        width: 150,
        height: 140,
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
        marginLeft: 30,
    },
    title:
    {
        alignSelf: 'center'
    },
    crossicon: {
        marginLeft: 120,
        position: 'absolute',
    }

});



const mapStateToProps = (state) => (
    {
        data: state.data
    }
)

const mapDispatchToProps = (dispatch) => ({
    getData:() => getData(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Gridlayoutscreen);

