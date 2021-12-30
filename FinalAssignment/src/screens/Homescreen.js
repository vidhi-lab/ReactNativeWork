import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { menu, plus } from '../constants'
import { Personalschema } from '../Database/Schema/Personalschema'
import Modalcontainer from './Modalcontainer'
import Nav from '../components/Nav'
import { Notes } from '../Database/Schema/Personalschema'

// import { connect } from 'react-redux'
// import reducer from '../Redux/Reducer/Reducer'

export default class Homescreen extends Component {

  state = {
    plusshow: false,
    personal: false,
    ideas: false,
    work: false,
    list: false,
    personalData: [],
    workData: [],
    listData: [],
    ideasData: [],
  }

  onPlusSignPressed = () => {
    this.setState({
      plusshow: !this.state.plusshow
    })
  }
  componentDidMount() {
    Realm.open({
      schema: [Notes]
    }).then(realm => {
      const arr = realm.objects('notes')
      const val = arr.map((item) => {
        if (item.type == 'Personal') {
          return item
        }
      })
      this.setState({ personalData: val })
      console.log("Data are", this.state.personalData)
      const val1 = arr.map((item) => {
        if (item.type == 'Work') {
          return item
        }
      })
      this.setState({ workData: val1 })
      const val2 = arr.map((item) => {
        if (item.type == 'Lists') {
          return item
        }
      })
      this.setState({listData:val2})
      console.log("list",this.state.listData)
      const val3 = arr.map((item) => {
        if (item.type == 'Ideas') {
          return item
        }
      })
      this.setState({ideasData:val3})
    })
  }

  handlePersonal = () => {
    this.setState({ personal: true, work: false, idea: false, list: false });
    this.props.navigation.navigate('Personal');
  };
  handleWork = () => {
    this.setState({ personal: false, work: true, idea: false, list: false });
    this.props.navigation.navigate('Work');
  };
  handleIdea = () => {
    this.setState({ personal: false, work: false, idea: true, list: false });
    this.props.navigation.navigate('Ideas');
  };
  handleList = () => {
    this.setState({ personal: false, work: false, idea: false, list: true });
    this.props.navigation.navigate('List');
  };

  render() {
    const { work, personal, list, ideas, Data } = this.state
    return (
      <View styles={styles.container}>
        <View style={styles.headingcontainer}>
          <Text style={styles.mytxt}>My</Text>
          <Text style={styles.notetxt}>Notes</Text>
        </View>

        <View style={styles.perview}>
          <TouchableOpacity
            onPress={() => this.handlePersonal()}>
            <Text style={[
              styles.pertxt,
              {
                color: personal ? 'red' : 'blue',
              },
            ]}>Personal</Text>
          </TouchableOpacity>
          <Text style={styles.datalengthtxt}>
          {this.state.personalData.length}</Text>
        </View>

        <View style={styles.perview}>
          <TouchableOpacity
            onPress={() => this.handleWork()}>
            <Text style={[
              styles.pertxt,
              {
                color: work ? 'red' : 'blue',
              },
            ]}>Work</Text>
          </TouchableOpacity>
          <Text style={styles.datalengthtxt2}>
          {this.state.workData.length}</Text>
        </View>

        <View style={styles.perview}>
          <TouchableOpacity
            onPress={() => this.handleList()}>
            <Text style={[
              styles.pertxt,
              {
                color: list ? 'red' : 'blue',
              },
            ]}>List</Text>
          </TouchableOpacity>
          <Text style={styles.datalengthtxt3}>
          {this.state.listData.length}</Text>
        </View>

        <View style={styles.perview}>
          <TouchableOpacity
            onPress={() => this.handleIdea()}>
            <Text style={[
              styles.pertxt,
              {
                color: ideas ? 'red' : 'blue',
              },
            ]}>Ideas</Text>
          </TouchableOpacity>
          <Text style={styles.datalengthtxt4}>
          {this.state.ideasData.length}</Text>
        </View>

        <View style={styles.imagecontainer}
          navigation={this.props.navigation}>
          <Image style={styles.menuimage}
            source={menu} />
          {
            this.state.plusshow ? <Modalcontainer backfunction={this.onPlusSignPressed}/> :
              <TouchableOpacity
                onPress={() => this.onPlusSignPressed()}>
                <Image style={styles.plusimage}
                  source={plus} />
              </TouchableOpacity>
          }
        </View>
        {/* <View style={styles.menutxtview}>
            <Text style={styles.menutxt}>Menu</Text>
            </View>   */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  headingcontainer:
  {
    marginTop: 60,
    flexDirection: 'row',
    marginHorizontal: 40,

  },
  mytxt:
  {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'red',
    marginRight: 15
  },
  notetxt:
  {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'blue',
  },
  imagecontainer:
  {
    marginTop: 50,
    marginLeft: 40,
    flexDirection: 'row',
  },
  menuimage:
  {
    marginRight: 250
  },
  menutxt:
  {
    fontSize: 20,
    fontWeight: '600',
    color: 'red',
    marginLeft: 40,
  },
  menutxtview:
  {
    marginBottom: -30
  },
  perview:
  {
    marginTop: 60,
    marginLeft: 90,
    flexDirection: 'row',

  },
  datalengthtxt:
  {
    marginLeft: 90,
    fontSize: 30,
    fontWeight: '600'
  },
  pertxt:
  {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple'
  },
  datalengthtxt2:
  {
    marginLeft: 140,
    fontSize: 30,
    fontWeight: '600'
  },
  datalengthtxt3:
  {
    marginLeft: 160,
    fontSize: 30,
    fontWeight: '600'
  },
  datalengthtxt4:
  {
    marginLeft: 140,
    fontSize: 30,
    fontWeight: '600'
  }
});
