import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Realm from 'realm';

const { height, width } = Dimensions.get('window');


class Adddetails extends Component {
  state = {
    employeeId: '',
    name: '',
    designation: '',
    salary: '',

  };



  saveData = () => {

    const employeeSchema = {
      name: 'Employee',
      properties: {
        _id: 'string',
        name: 'string',
        designation: 'string',
        salary: 'string',
      },
    };

    // onFocus = () => {
    //   this.setState({
    //     backgroundColor: 'green'
    //   })
    // }

    // onBlur = () => {
    //   this.setState({
    //     backgroundColor: '#ededed'
    //   })
    // }

    this.realm = new Realm({ schema: [employeeSchema] })
    const { employeeId, name, salary, designation } = this.state
    if (employeeId.length === ''
      || name.length == ''
      || salary.length === ''
      || designation.length == '') {
      alert('Please fill all details')
    }
    else {
      this.realm.write(() => {
        const details = this.realm.create('Employee', {
          _id: this.state.employeeId,
          name: this.state.name,
          designation: this.state.designation,
          salary: this.state.salary,
        });
        console.log(details);
      });
      this.props.navigation.goBack()
    }

  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Employee Details</Text>
        </View>

        <View style={styles.txtcontainer}>
          <TextInput
            style={styles.idtxt}
            placeholder="Employee ID"
            placeholderTextColor="#888"
            value={this.state.employeeId}
            onChangeText={text => this.setState({ employeeId: text })}
          />

          <TextInput
            style={styles.idtxt}
            placeholder="Employee Name"
            placeholderTextColor="#888"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />
          <TextInput
            style={styles.idtxt}
            placeholder="Designation"
            placeholderTextColor="#888"
            value={this.state.designation}
            onChangeText={text => this.setState({ designation: text })}
          />
          <TextInput
            style={styles.idtxt}
            placeholder="Salary"
            placeholderTextColor="#888"
            value={this.state.salary}
            onChangeText={text => this.setState({ salary: text })}
          />
        </View>


        <View style={styles.button}>
          <TouchableOpacity onPress={() => this.saveData()}>
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fa9a',
  },
  header: {
    width: width,
    backgroundColor: '#9932cc',
    alignSelf: 'center',
    padding: height / 50,
  },
  headerText: {
    textAlign: 'center',
    fontSize: height / 32,
    fontWeight: "500"
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: height / 15,
    right: width / 12,
    padding: height / 50,
    borderRadius: 12,
    backgroundColor: '#9932cc',
  },
  buttontext: {
    fontWeight: 'bold',
  },
  idtxt:
  {
    borderWidth: 2,
    borderRadius: 8,
    height: height / 16,
    marginBottom: 20,
    marginHorizontal: 20
  },
  txtcontainer:
  {
    marginTop: 20
  }

});

export default Adddetails;