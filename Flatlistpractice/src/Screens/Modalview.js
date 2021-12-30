import React, { Component } from 'react'
import { Text, View, Modal,
 SafeAreaView, TouchableOpacity,
StyleSheet,Image }
    from 'react-native';
import Radiocheckboxes2 from './Radiocheckboxes2';
import Checkboxes from './Checkboxes';

export default class Modalview extends Component {

    state = {
        modalvisible: true,
        setcomponent: false
    }


    render() {
        const { modalvisible,setcomponent } = this.state
        return (
            <Modal 
                visible={modalvisible}>
            <SafeAreaView style={styles.maincontainer}>
                
                <TouchableOpacity
                    style={styles.navBtn}
                    onPress={() => this.setState({setcomponent:true})}>
                    <Text style={styles.navText}>Radio</Text>
                </TouchableOpacity>
                {/* <Image source={require('../../src/Screens/assets/cross.png')}
                    onPress={()=>this.setState({})}
                /> */}
                <TouchableOpacity
                    style={styles.navBtn}
                    onPress={() => this.setState({setcomponent:false})}>
                    <Text style={styles.navText}>Check</Text>
                </TouchableOpacity>
                {
                    setcomponent?<Radiocheckboxes2/>:<Checkboxes/>
                }
                
            </SafeAreaView>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    navText:
    {
      fontSize:20
    },
    nav:
    {
      flexDirection:'row',
      marginHorizontal:30,
    },
    navBtn:
    {
      marginRight:190
    },
    maincontainer:
    {
        marginTop:30
    }
});
