import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput, Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux';
import { edit, edit1 } from '../constants/index'
import Realm from 'realm';
import { User } from '../realm/schema';

const { height, width } = Dimensions.get('window');

class Profilescreen extends Component {

    state = {
        index:this.props.route.params.id,
        first_name: this.props.route.params.first_name,
        last_name: this.props.route.params.last_name,
        avatar_image: this.props.route.params.avatar,
        email_address:this.props.route.params.email,
        editIconPress: false,
        profession: "Software Developer",
    }

    onEditIconPress = () => {
        this.setState({
            editIconPress: true
        })
    }

    onEmailTextChanged=(email_address)=>{
        this.setState({email_address:
            this.state.email_address=email_address
        })
    }

    updateData = () =>{
        // this.state.obj.email = this.state.email_address,
        // this.state.obj.first_name=this.state.first_name,
        // this.state.obj.last_name=this.state.last_name
        // this.props.updateDetails(this.state)
        this.props.updateDetails(this.state)
        // console.log(this.state)
        this.props.navigation.goBack()
        Realm.open({
            schema:[User]
        })
        .then(realm=>{
            realm.write(()=>{
                realm.create('user',{
                    id:this.state.index,
                    email:this.state.email_address,
                    first_name:this.state.first_name,
                    last_name:this.state.last_name
                })
            })
            console.log("done")
            realm.close()
        })

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.imageicon}
                            source={{ uri: this.state.avatar_image }}
                        />
                        <TouchableOpacity
                            onPress={() => this.onEditIconPress()}>
                            <Image style={styles.editicon}
                                source={edit}
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.editIconPress ?
                            <View>
                            <TextInput value={this.state.first_name}
                            onChangeText={(text)=>this.setState({first_name:text})}
                                style={styles.editicontxtinput} /> 
                                <TextInput value={this.state.last_name}
                            onChangeText={(text)=>this.setState({last_name:text})}
                                style={styles.editicontxtinput} /></View>:
                            <Text style={styles.nametxt}>
                                {this.state.first_name} {this.state.last_name}</Text>
                    }
                    {
                        this.state.editIconPress ?
                            <TextInput value={this.state.profession}
                            onChangeText={(text)=>this.setState({profession:text})}
                                style={styles.editicontxtinput} /> :
                            <Text style={styles.professiontxt}>
                                {this.state.profession}</Text>
                    }
                    <View style={styles.emailview}>
                        <Text style={styles.emailtxt}>
                            Email Address</Text>
                        <TextInput
                            style={styles.emailtxtinput}
                            value={this.state.email_address}
                            onChangeText={(email_address)=>{
                                this.onEmailTextChanged(email_address)
                            }}
                        />
                        <Text style={styles.usernametxt}>
                            Username</Text>
                        <TextInput
                            style={styles.emailtxtinput}
                        />
                        <Text style={styles.usernametxt}>
                            Password</Text>
                        <TextInput
                            style={styles.emailtxtinput}
                        />

                        <Text style={styles.usernametxt}>
                            Birth Date(Optional)</Text>
                        <View style={styles.dobview}>
                            <TextInput style={styles.dobtxt} />
                            <TextInput style={styles.dobtxt} />
                            <TextInput style={styles.dobtxt} />
                        </View>

                        <TouchableOpacity style={styles.editbutton}
                        onPress={this.updateData}>
                            <Text style=
                            {{fontSize:15,
                            fontWeight:'600',
                            textAlign:'center',
                            marginTop:10}}>SAVE</Text>
                        </TouchableOpacity>

                        <Text style={styles.joiningtxt}>
                            Joined 21 Jan 2020</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    imagecontainer:
    {
        borderRadius: 3,
        borderRadius: 60,
        backgroundColor: '#d3d3d3',
        width: 120,
        height: 120,
        marginTop: 40,
        marginLeft: 150
    },
    emailtxt:
    {
        fontSize: 18,
        color: '#d3d3d3',
        fontWeight: '600',
        textAlign: 'left',
        justifyContent: 'center',
        marginLeft: 30

    },
    emailview:
    {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    emailtxtinput:
    {
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 2,
        width: width / 1.2,
        height: 30,
        marginHorizontal: 30,
        marginTop: 5,
        fontWeight:'600'
    },
    usernametxt:
    {
        fontSize: 18,
        color: '#d3d3d3',
        fontWeight: '600',
        textAlign: 'left',
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 40
    },
    joiningtxt:
    {
        fontSize: 18,
        color: '#d3d3d3',
        fontWeight: '600',
        textAlign: 'left',
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 110
    },
    nametxt:
    {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: '600'

    },
    imageicon:
    {
        width: width / 4.5,
        height: height / 8.5,
        borderRadius: 60,
        marginTop: 12,
        alignSelf: 'center'
    },
    professiontxt:
    {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: '400'
    },
    editicon:
    {
        marginLeft: 90,
        position:'absolute',
        marginTop:-22
    },
    dobview:
    {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 30
    },
    dobtxt:
    {
        width: width / 5,
        height: height / 12,
        borderBottomWidth: 3,
        borderBottomColor: '#d3d3d3'
    },
    editicontxtinput:
    {
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 2,
        width: width / 2,
        height: 30,
        marginHorizontal: 110,
        marginTop: 20
    },
    editbutton:
    {
        backgroundColor:'#888',
        borderRadius:10,
        width:width/3,
        height:height/20,
        marginTop:60,
        marginLeft:220

    }
});

const mapStateToProps=state=>{
    return{data:state.data};
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateDetails:(val)=>
        dispatch({type:'UPDATED_DETAILS',payload:val}),
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Profilescreen);
