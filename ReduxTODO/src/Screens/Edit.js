import React, { Component } from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Edit extends Component {

    state={
        index:this.props.route.params.index,
        txtvalue:this.props.route.params.txtvalue,
        body:this.props.route.params.body
    }
    


    onEditPress=()=>{
        // this.props.editItem(this.state);
        // this.props.navigation.navigate('Home')
        console.log(this.state.index)
        console.log(this.state.txtvalue)
        console.log(this.state.body)
    }


    render() {
        return (
            <View style={styles.maincontainer}>
                <TextInput
                    style={styles.txtinput}
                    value={this.state.txtvalue}
                    onChangeText={(text)=>this.setState({txtvalue:text})}
                />
                <TextInput
                    style={styles.txtinput}
                    value={this.state.body}
                    onChangeText={(text)=>this.setState({body:text})}
                />
                <View style={styles.btncontainer}>
                <TouchableOpacity style={styles.btn}
                onPress={this.onEditPress}>
                <Text style={styles.txtbtn}>SAVE</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    txtinput:
    {
        fontSize: 27,
        fontWeight: '500',
        color: '#ff8080',
        marginVertical: 10,
        marginHorizontal: 10,
        borderBottomWidth:2,
        width:300
    },
    maincontainer:
    {
        marginLeft:20,
        marginTop:30
    },
    btncontainer:
    {
        marginTop:500,
        marginLeft:300
    },
    btn:
    {
        borderWidth:3,
        width:70,
        height:70,
        borderRadius:40,
        borderColor:'#ff8080'
    },
    txtbtn:
    {
        alignSelf:'center',
        marginTop:22,
        fontWeight:'bold'
    }
});

const mapStateToProps=(state)=>{
    return{
        data:state.sportsList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        editItem:(val)=>dispatch({type:'EDIT',payload:val}),
        saveItem: val => dispatch({type: 'SAVE_ITEM', payload: val}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit) 

