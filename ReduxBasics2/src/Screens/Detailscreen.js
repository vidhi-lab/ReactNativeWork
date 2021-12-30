import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,Dimensions,TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux';
// import reducer from '../Redux/Reducer/CountReducer'


const{width,height}=Dimensions.get('window');

class Detailscreen extends Component {

    state={
        obj:this.props.route.params,
        title:this.props.route.params.title,
        body:this.props.route.params.body,
    }
    updateData = () =>{
        this.state.obj.title = this.state.title
        this.state.obj.body = this.state.body
        console.log(this.state.obj)
        this.props.updateObject(this.state)
        this.props.saveData()
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            // <View>

            // <Text>{this.props.route.params.title}</Text>
            // <Text>{this.props.route.params.body}</Text>
            // </View>
            <View style={styles.container}>
            <View style={styles.container2}>
            <Text style={styles.heading}>Edit these detalils</Text>
            </View>
                <TextInput style={styles.txtinput}
                placeholder="Your title text"
                placeholderTextColor="#000"
                value={this.state.title}
                multiline={true}
                onChangeText={(text)=>this.setState({title:text})}
                >
                </TextInput>
                {/* <Text>{JSON.stringify(this.state.obj)}</Text> */}
                <TextInput style={styles.txtinput1}
                placeholder="Your body text"
                placeholderTextColor="black"
                value={this.state.body}
                multiline={true}
                onChangeText={(text)=>this.setState({body:text})}>
                </TextInput>
                <TouchableOpacity style={styles.btn}
                onPress={this.updateData}>
                <Text style={styles.txt}>SAVE</Text>
                </TouchableOpacity>
                <Button title="go to signup" 
                    onPress={()=> navigation.navigate('Sign')}
                />
            </View>
        )
    }
}
const mapStateToProps=state=>
    {
        return{details:state.details};
    }
const mapDispatchToProps=dispatch=>{
        return{
            updateObject:details=>dispatch({type:'UPDATED_DATA',payload:details}),
            saveData:()=>dispatch({type:'SAVE_DATA'})
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detailscreen)

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'#afeeee'
    },
    txtinput:
    {
        borderWidth:3,
        width:width/1.5,
        height:height/13,
        marginTop:40,
        marginLeft:25,
        borderRadius:10,
        borderColor:'#000'
    },
    txtinput1:
    {
        borderWidth:3,
        width:width/1.3,
        height:height/6,
        marginTop:40,
        marginLeft:25,
        borderRadius:10,
        borderColor:'#000'
    },
    btn:
    {
        borderWidth:2,
        marginTop:270,
        marginHorizontal:20,
        height:height/12,
        borderRadius:5,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#1e90ff'
    },
    txt:
    {
        fontSize:20,
        fontWeight:'bold'
    },
    heading:
    {
        marginLeft:20,
        marginTop:20,
        fontSize:20,
        textDecorationLine:'underline',
        fontWeight:'bold'

    },
    

});
