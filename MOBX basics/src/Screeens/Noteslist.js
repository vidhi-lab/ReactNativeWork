import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,
    SafeAreaView,Dimensions, 
    Alert,ScrollView} from 'react-native';
import {inject,observer} from "mobx-react"

const{width,height}=Dimensions.get('window');


@inject('listStore')
@observer
export default class Noteslist extends Component {
    dataclear=(index)=>{
        Alert.alert('HOLD ON','Are you sure you want to delete',
        [
            {
                text:'Cancel',
                onPress:()=>null,
                style:'cancel'
            },
            {
                text:'Yes',
                onPress:()=>{
                    this.props.listStore.removeData(index)
                }
            }
        ]
            
        )
    }
    

    render() {
        console.log(this.props.listStore.title);
        return (
            <SafeAreaView style={styles.maincontainer}>
            {this.props.listStore.data==''?(
            <View style={styles.header}>
                <Text style={styles.headingtext}>You do not have any notes</Text>
            </View>
            ): null}
            
            
            <ScrollView style={styles.listcontainer}>
                {this.props.listStore.data.map((i,index)=>(
                    <TouchableOpacity
                    style={styles.list} 
                    onLongPress={()=>this.dataclear(index)}
                    onPress={()=>this.props.navigation.navigate('Add',{
                        id:index,
                        title:i.title,
                        body:i.body
                    })}
                    key={index}>
                    <Text style={styles.title}>{i.title}</Text>
                    <Text style={styles.body}>{i.body}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            
           <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.btn}
                onPress={()=>this.props.navigation.navigate('Add',{
                    title:'',
                    body:''
                })}>
                    <Text style={styles.btntxt}>+ Add New Note</Text>
            </TouchableOpacity>
            </View>
            
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex:1,
    },
    btn:
    {
        
        borderRadius:20,
        height:height/16,
        width:width/2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#7fffd4'
    },
    btntxt:
    {
        color:'#888',
        fontSize:18,
        fontWeight:'bold',
        
    },
    buttoncontainer:
    {
        marginTop:600,
        position:'absolute',
        marginLeft:210
    },
    listcontainer:
    {
        flex:1
    },
    title:
    {
        fontSize:20,
        color:'#000',
        fontWeight:'500'
    },
    body:
    {
        fontSize:15,
        color:'#888',
        marginTop:3
    },
    list:
    {
        margin:20,
        padding:20,
        backgroundColor:'#eee',
        marginBottom:-5
    },
    header:
    {
        justifyContent: 'center',
        alignItems:'center',
        marginTop:300
    },
    headingtext:
    {
        fontSize:20,
        color:'#888',
        fontWeight:'500'

    }
    
    
    
    
    
    
   
});
