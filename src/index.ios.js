import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import Tabs from 'react-native-tabs';
import Home from './Views/ios/Home'
import MyProfile from './Views/ios/ProfilePage/MyProfile';
import TimeTable from './Views/ios/TimeTable';
import Attendance from './Views/ios/Attendance';
import Results from './Views/ios/Results';
import Icon from 'react-native-vector-icons/Ionicons';
 
export default class Nanna_Shaale extends Component {
  constructor(props){
    super(props);
    this.state = {selectedTab:'Home'};
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <Icon.TabBarItemIOS
      selected={this.state.selectedTab==='Home'}
      title="Home"
      iconName="ios-home-outline"
      selectedIconName="ios-home"
      onPress ={() => {
        this.setState({selectedTab:'Home'});
      }}>
      <Home />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
      selected={this.state.selectedTab==='My Profile'}
      title="Profile"
      iconName="ios-person-outline"
      selectedIconName="ios-person"
      onPress ={() => {
        this.setState({selectedTab:'My Profile'});
      }}>
      <MyProfile />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
      selected={this.state.selectedTab==='TimeTable'}
      title="TimeTable"
      iconName="ios-calendar-outline"
      selectedIconName="ios-calendar"
      onPress ={() => {
        this.setState({selectedTab:'TimeTable'});
      }}>
      <TimeTable />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
      selected={this.state.selectedTab==='Attendance'}
      title="Attendance"
      iconName="ios-hand-outline"
      selectedIconName="ios-hand"
      onPress ={() => {
        this.setState({selectedTab:'Attendance'});
      }}>
      <Attendance />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
      selected={this.state.selectedTab==='Results'}
      title="Results"
      iconName="ios-stats-outline"
      selectedIconName="ios-stats"
      onPress ={() => {
        this.setState({selectedTab:'Results'});
      }}>
      <Results />
      </Icon.TabBarItemIOS>

      </TabBarIOS>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AABCFF',
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
