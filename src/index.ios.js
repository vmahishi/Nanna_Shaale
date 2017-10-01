import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import Tabs from 'react-native-tabs';
import Home from './Views/ios/Home'
import MyProfile from './Views/ios/MyProfile';
import TimeTable from './Views/ios/TimeTable';
import Attendance from './Views/ios/Attendance';
import Results from './Views/ios/Results';
 
export default class Nanna_Shaale extends Component {
  constructor(props){
    super(props);
    this.state = {selectedTab:'Home'};
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
      selected={this.state.selectedTab==='Home'}
      systemIcon='featured'
      onPress ={() => {
        this.setState({selectedTab:'Home'});
      }}>
      <Home />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      selected={this.state.selectedTab==='My Profile'}
      systemIcon='contacts'
      onPress ={() => {
        this.setState({selectedTab:'My Profile'});
      }}>
      <MyProfile />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      selected={this.state.selectedTab==='TimeTable'}
      systemIcon='favorites'
      onPress ={() => {
        this.setState({selectedTab:'TimeTable'});
      }}>
      <TimeTable />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      selected={this.state.selectedTab==='Attendance'}
      systemIcon='bookmarks'
      onPress ={() => {
        this.setState({selectedTab:'Attendance'});
      }}>
      <Attendance />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      selected={this.state.selectedTab==='Results'}
      systemIcon='history'
      onPress ={() => {
        this.setState({selectedTab:'Results'});
      }}>
      <Results />
      </TabBarIOS.Item>

      </TabBarIOS>

      /* <View style={styles.container}> */
       /* <Tabs selected={this.state.page} style={{backgroundColor:'white'}} */
      //         selectedStyle={{color:'green'}} onSelect={el=>this.setState({page:el.props.name})}>
      //       <Text name="Home" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}><Home /></Text>
      //       <Text name="My Profile" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>My Profile</Text>
      //       <Text name="TimeTable" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>TimeTable</Text>
      //       <Text name="Attendance" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>Attendance</Text>
      //       <Text name="Results" selectedIconStyle={{borderTopWidth:2,borderTopColor:'green'}}>Results</Text>
      //   </Tabs>
      //     <Text style={styles.welcome}>
      //         Welcome to Nanna Shaale
      //     </Text>
      //     <Text style={styles.instructions}>
      //         Selected page: {this.state.page}
      //     </Text>
      // </View>
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
