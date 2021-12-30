import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions,TouchableOpacity, TextInput } from 'react-native'

const { height, width } = Dimensions.get('window')
import Realm from 'realm'
import { Notes,updateNote } from '../Database/Schema/Personalschema'
export default class Viewnotescreen extends Component {

    state = {
        obj:this.props.route.params,
        title: this.props.route.params.title,
        body: this.props.route.params.body,
        type:this.props.route.params.type,
        onedit:false,
        index:this.props.route.params.index
    }
    onEditPress=()=>{
        this.setState({onedit:true})
    }

    updateNote=()=>{
            this.state.obj.title = this.state.title
            this.state.obj.body = this.state.body
    }

    


    render() {
        console.log(this.state.index)
        return (
            <View style={styles.container}>
            {
                this.state.onedit ?
                <View>
                <TextInput
                    style={styles.titletxt}
                    value={this.state.title}
                    onChangeText={(text)=>this.setState({
                        title:text
                    })}
                />
                <TextInput
                    style={styles.titletxt}
                    value={this.state.body}
                    onChangeText={(text)=>this.setState({
                        body:text
                    })}
                />
                <TouchableOpacity 
                    onPress={()=>this.updateNoteRealm()}
                    style={styles.button}>
                    <Text style={styles.buttontxt}>UPDATE NOTE</Text>
                </TouchableOpacity>
                </View>:
                <View>
                <View style={styles.txtcontainer}>
                <Text style={styles.txt}>TITLE: {this.state.title}</Text>
                <Text style={styles.txt}>BODY: {this.state.body}</Text>
                </View>
                <View style={styles.buttoncontainer}>
                <TouchableOpacity onPress={()=>this.onEditPress()}
                    style={styles.button}>
                    <Text style={styles.buttontxt}>EDIT NOTE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.buttontxt}>DELETE NOTE</Text>
                </TouchableOpacity>
                </View>
                </View>
            }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txtcontainer:
    {
        marginTop: 40,
        marginLeft: 10,
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
    txt: {
        fontSize: 20,
        fontWeight: '500',
        Color: '#888',
        marginBottom: 10
    },
    button:
    {
        marginTop: 50,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6,
        width: 150,
        height: 50,
        backgroundColor: 'purple',
        marginLeft: 20,
    },
    buttontxt:
    {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: 'white',
    },
    buttoncontainer:
    {
        marginTop:200,
        flexDirection:'row'
    },
    titletxt:
    {
        width: 350,
        height: 50,
        borderWidth: 3,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 20,
        borderColor:'#888',
    },
});
