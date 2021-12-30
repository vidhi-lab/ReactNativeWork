import React, { Component } from 'react'
import { Text, 
SafeAreaView,
TextInput,
StyleSheet,
Dimensions, 
View, 
TouchableOpacity,
KeyboardAvoidingView,
ScrollView} from 'react-native';
import {inject,observer} from 'mobx-react';

const{width,height}=Dimensions.get('window');

@inject('listStore')
@observer
export default class Addnote extends Component {
    
    state={
        id:this.props.route.params.id,
        title:this.props.route.params.title,
        body:this.props.route.params.body
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
             <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput style={styles.txtinput1}
                 placeholder="Add Title"
                 value={this.state.title}
                 onChangeText={(text)=>this.setState({title:text})}
                >
                </TextInput>
                <TextInput style={styles.txtinput2}
                value={this.state.body}
                 onChangeText={(text)=>this.setState({body:text})}
                 placeholder="Add body"
                 multiline={true}>
                </TextInput>
                <View style={styles.container2}>
                <TouchableOpacity style={styles.btn2}
                    onPress={()=>{
                        if(this.props.route.params.title==''){
                        this.props.listStore.
                        addDataToList(this.state.title,this.state.body,this.state.id)
                        }
                        else{
                            this.props.listStore.
                            updateData(this.state.title,this.state.body,this.state.id)
                        }
                        this.props.navigation.navigate('Note');
                    }}>
                    <Text style={styles.txt2}>Add</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        marginTop:30,
        marginLeft:40
    },
    txtinput1:
    {
        borderWidth:1,
        height:height/16,
        width:width/1.5,
        borderRadius:5
    },
    txtinput2:
    {
        borderWidth:1,
        height:height/3,
        width:width/1.2,
        marginTop:20,
        borderRadius:5
    },
    container2:
    {
        marginTop:280,
        marginLeft:280
    },
    btn2:
    {
        
        backgroundColor:'#7fffd4',
        height:height/20,
        width:width/5,
        borderRadius:10,
        justifyContent: 'center',
        alignItems:'center'
    },
    txt2:
    {
        color:'#888',
        fontSize:18,
        fontWeight:'600'
    }

});
