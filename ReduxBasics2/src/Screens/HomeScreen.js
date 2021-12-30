import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    fetchapi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts'
            )
            .then(response => response.json())
            .then(details => {
                return this.props.fetchdetails(details)
            })
    };
    componentDidMount() {
        this.fetchapi();
    }

    navDetails=(data)=>
    {
        this.props.navigation.navigate('Detail',data);
    }
    

    render()
    
     {
        const Item = ({data}) => (
            <TouchableOpacity onPress={()=>this.navDetails(data)}>
            <View style={styles.item}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.body}>{data.body}</Text>
            </View>
            </TouchableOpacity>
           
        )
        const renderItem = ({ item }) => (
            <Item data={item} />
        );
    return (
        <View style={styles.container}>
        <SafeAreaView>
            <FlatList
                data={this.props.details}
                renderItem={renderItem}
                keyExtractor={item => item.id}>   
            </FlatList>
        </SafeAreaView>
        </View>
    )
}
}
const mapStatetToProps = state => {
    return {
        details: state.details,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchdetails: value => dispatch({ type: 'LOADED_DATA', payload: { value } })
    };
};

export default connect(mapStatetToProps, mapDispatchToProps)(HomeScreen)
const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor:'#000',
        borderRadius:10,
        borderColor:''
    },
    title: {
        fontSize: 15,
        color:'red',
    },
    container:
    {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#888'
    },
    body:
    {
        fontSize:10,
        color:'#888'
    }
});