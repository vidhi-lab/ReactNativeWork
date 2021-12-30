import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CheckBox from 'react-native-check-box'

export default class Checkboxes extends Component {
    state = {
        isChecked:true
    }

    render() {
        return (
            <View style={{marginTop:30}}>
                <CheckBox 
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    leftText={"CheckBox"}
                />
                
            </View>
        )
    }
}
