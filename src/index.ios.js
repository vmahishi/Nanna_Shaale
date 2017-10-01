import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
 
import Tabs from 'react-native-tabs';
 
export default class Nanna_Shaale extends Component {
  constructor(props){
    super(props);
    this.state = {page:'Home'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'green'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="Home" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>Home</Text>
            <Text name="My Profile" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>My Profile</Text>
            <Text name="TimeTable" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>TimeTable</Text>
            <Text name="Attendance" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>Attendance</Text>
            <Text name="Results" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>Results</Text>
        </Tabs>
          <Text style={styles.welcome}>
              Welcome to React Native
          </Text>
          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 
AppRegistry.registerComponent('Nanna_Shaale', () => Nanna_Shaale);
