import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} 
from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];

export default class Radiocheckboxes2 extends Component {

    // initialvalue=()=>{
    //     value:0     
    // }


    render() {
        return (
            <View style={styles.maincontainer}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    animation={true}
                    buttonSize={40}
                    buttonOuterSize={60}
                    selectedButtonColor={'green'}
                    selectedLabelColor={'red'}
                    onPress={(value)=>this.setState({value:value})}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        marginTop:40
    }
});
