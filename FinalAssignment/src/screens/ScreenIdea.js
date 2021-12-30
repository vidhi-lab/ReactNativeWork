import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,ScrollView,TouchableOpacity } from 'react-native'
import {react1,React2} from '../constants'
import Realm from 'realm'
import { Notes } from '../Database/Schema/Personalschema'
const {width, height} = Dimensions.get('window');

export default class Ideascreen extends Component {
    state = {
        Data: []
    };
    componentDidMount() {
      Realm.open({
        schema: [Notes]
      }).then(realm => {
        let arr = realm.objects('notes')
        let val=arr.filter((item)=>{
            if(item.type=='Ideas')
            {
              return item
            }
        })
        this.setState({ Data: val })
        console.log(realm.objects('val'))
      })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Idea</Text>
                    <View style={styles.countContainer}>
                        <Text style={styles.countText}>{this.state.Data.length}</Text>
                    </View>
                    </View>
                    <ScrollView>
                    {
                        this.state.Data.map((item, index) => (
                            <View key={index}
                            style={styles.datacontainer}>
                                <Text style={styles.datetxt}>Today at {JSON.stringify(item.getDate)}</Text>
                                <Text style={styles.titletxt}>{item.title}
                                </Text>
                                <Text style={styles.bodytxt}>{item.body}
                                </Text>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('View',item)}>
                                <Text style={styles.viewNote}>View note...</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex:1
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30,
      },
      heading: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
      },
      countContainer: {
        backgroundColor: '#ffcccb',
        borderRadius: 50,
        width: 50,
        alignItems: 'center',
      },
      countText: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
      },
      datacontainer: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: width - 20,
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
      },
      titletxt: {
        color: 'red',
        marginBottom: 10,
      },
      bodytxt: {
        color: '#000',
      },
      datetxt: {
        color: 'red',
        fontWeight: '600',
        marginBottom: 15,
      },
      viewNote: {
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'flex-end',
      },
});
