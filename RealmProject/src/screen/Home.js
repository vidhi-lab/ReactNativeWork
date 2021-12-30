import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Realm from 'realm';


import Adddetails from './Adddetails';

const {height, width} = Dimensions.get('window');

class Home extends Component {
  _isMounted = false;

  state = {
    arr: [],
    sortedArray: [],
    getSortData: false,
  };

  

  _unsubscribe = async () => {
    const employeeSchema = {
      name: 'Employee',
      properties: {
        _id: 'string',
        name: 'string',
        designation: 'string',
        salary: 'string',
      },
    };
    this.realm = await Realm.open({
      schema: [employeeSchema],
    });

    const data = this.realm.objects('Employee');

    this.setState({
      arr: data,
    });
  };

  
  sorting = () => {
    this.setState({
      getSortData: true,
    });
    const empSortData = this.realm.objects('Employee');
    const sortedBySalary = empSortData.sorted('salary', true);
    console.log(sortedBySalary);
    this.setState({
      sortedArray: sortedBySalary,
    });
    console.log(this.state.sortedArray)
  };

  
  async componentDidMount() {
    this.props.navigation.addListener('focus', async () => {
      this._unsubscribe();
    });
  }

  

  getEmpDetails = items => {
    const {item} = items;
    return (
      <View style={styles.employeeList}>
        <Text>Emp_ID: {item._id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Designation: {item.designation}</Text>
        <Text>Salary: {item.salary}</Text>
      </View>
    );
  };

  getSortedDetails = items => {
    const {item} = items;
    return (
      <View style={styles.employeeList}>
        <Text>Emp_ID: {item._id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Designation: {item.designation}</Text>
        <Text>Salary: {item.salary}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.setState({getSortData: false});
            }}>
            <Text style={styles.headerText}>Employee Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Adddetails')}>
            <Text style={styles.headerText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.sorting()}>
            <Text style={styles.headerText}>Sort</Text>
          </TouchableOpacity>
        </View>

        
        {this.state.arr.length === 0 ? (
          <Text style={styles.displayText}>
            No employees found. Please Add Employee
          </Text>
        ) : this.state.getSortData ? (
          <FlatList
            data={this.state.sortedArray}
            renderItem={this.getSortedDetails}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <FlatList
            data={this.state.arr}
            renderItem={this.getEmpDetails}
            keyExtractor={(item, index) => index}
          />
        )}
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
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: height / 50,
    flexDirection: 'row',
  },
  headerText: {
    textAlign: 'center',
    fontSize: height / 30,
    fontWeight:'500'
  },
  displayText: {
    textAlign: 'center',
    marginTop: height / 3,
    fontSize:20
  },
  employeeList: {
    backgroundColor: '#f08080',
    margin: height / 40,
    padding: height / 50,
    borderRadius: height / 50,
  },
});

export default Home;