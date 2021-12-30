import React, { Component } from 'react'
import { Text, View,StyleSheet,
 FlatList,SafeAreaView,Image } from 'react-native';
 import img from '../Screens/assets/img.jpg';
 import img2 from '../Screens/assets/img2.jpg';
 import img3 from '../Screens/assets/img3.jpg';


const DATA = [
    {
      id: '1',
      title: 'First Item',
      photo:img
    },
    {
      id: '2',
      title: 'Second Item',
      photo:img2
    },
    {
      id: '3',
      title: 'Third Item',
      photo:img3
    },
  ];

  const Item=({title,pictures})=>(
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image source={pictures}
         style={styles.itemsimages}/>
      </View>
  )

  const renderItem=({item})=>(
      <Item title={item.title} pictures={item.photo}/>
  )

export default class Flatlistitems extends Component {

    render() {
        return (
            <SafeAreaView style={styles.maincontainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex:1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      itemsimages:
      {
        height:100,
        width:80
      }
});
