import React, { Component } from 'react'
import { Text, 
    TextInput, 
    View, StyleSheet, TouchableOpacity,FlatList,Alert } from 'react-native'
import { connect } from 'react-redux'

class Homescreen extends Component {
    state = {
        txtvalue: '',
        body:''
    }

    onAddPress = () => {
        
            this.props.addListItem(this.state);
        
    }

    onDeletePress=(index)=>{
        console.log(index)
        Alert.alert('HOLD ON','Do you want to delete',[
            {
            text:'NO',
            onPress:()=>null
            },
            {
                text:'YES',
                onPress:()=>{this.props.deleteItem(index)}
            }
        ])
        return true;
    }

    render() {
        return (
            <View style={styles.maincontainer}>
                <TextInput
                    style={styles.txtinput}
                    placeholder="Enter Title"
                    onChangeText={(text) => this.setState({ txtvalue: text })}
                    value={this.state.txtvalue}
                />
                <TextInput
                    style={styles.txtinput}
                    placeholder="Enter body"
                    onChangeText={(text) => this.setState({ body: text })}
                    value={this.state.body}
                />
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={this.props.lists}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item,index }) => (
                            <TouchableOpacity 
                            onPress={()=>
                            this.props.navigation.navigate('Edit screen',{...item})}
                            onLongPress={()=>this.onDeletePress(index)}>
                            <View style={styles.listcontainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {item.txtvalue}
                                </Text>
                                <Text style={styles.title} numberOfLines={3}>
                                {item.body}
                                </Text>
                            </View>
                            </TouchableOpacity>
                    )}
                />
                <View style={styles.btn}>
                    <TouchableOpacity
                        onPress={this.onAddPress}>
                        <Text style={styles.txtbtn}>ADD</Text>
                    </TouchableOpacity>
                </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
        marginTop: 30,
        marginLeft: 40
    },
    txtinput:
    {
        width: 300,
        borderBottomWidth: 2,
        borderRadius: 5,
        height: 30,
        marginTop: 30,
        marginBottom: 30
    },
    btn:
    {
        width: 70,
        height: 70,
        borderWidth: 3,
        borderRadius: 60,
        backgroundColor:'#ff8080',
        marginLeft:260,
        marginTop:200
    },
    txt:
    {
        fontSize: 15,
        color: '#000'
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    list: {
        flexGrow: 1,
    },
    txtbtn:
    {
        alignSelf:'center',
        marginTop:20,
        fontSize:15,
        fontWeight:'bold',
    },
});

const mapStateToProps = (state) => {
    return { lists: state }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addListItem: (data) => dispatch({ type: 'ADD', payload: data }),
        deleteItem:(val1)=>dispatch({type:'DELETE',payload:val1})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homescreen)