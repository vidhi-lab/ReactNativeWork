import React, { Component } from 'react'
import { Text, View 
    ,SafeAreaView, 
    TouchableOpacity,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import reducer from '../redux/reducer/CounterReducer';
import  { decrementCounterAction, incrementCounterAction } from '../redux/action/Action'

export class Newcomponent extends Component {
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.touch1} onPress=
                {this.props.increment}>
                <Text style={styles.txt}>Increase</Text>
             </TouchableOpacity>
             </View>
             <Text style={styles.txt2}>{this.props.counter}</Text> 
             <View>   
             <TouchableOpacity style={styles.touch1}
              onPress=
                {this.props.decrement}>
                    <Text style={styles.txt}>Decrease</Text>
            </TouchableOpacity>
            </View> 
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        alignItems:'center',
        marginTop:250,
    },
    touch1:
    {
        borderRadius:10,
        borderWidth:2,
        height:35,
        width:170,
        borderColor:'#888',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#add8e6'
    },
    txt:
    {
        fontSize:18,
        fontWeight:'500'
    },
    txt2:
    {
        padding:30,
        fontSize:20,
        fontWeight:'bold'
    }
});




const mapStateToProps=state=>(
    {
        counter:state.counter
    }
    
);

const mapDispatchToProps = (dispatch) => ({
    increment: () => incrementCounterAction(dispatch),
    decrement: () => decrementCounterAction(dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)
(Newcomponent);



