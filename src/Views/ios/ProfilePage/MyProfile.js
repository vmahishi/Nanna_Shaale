import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import ProfileImage from './ProfileImage'
import Header from './Header'
import StudentInfo from './StudentInfo'
import ParallaxScroll from 'react-native-parallax-scroll'

  class MyProfile extends Component{
      render(){
          return(
            <ParallaxScroll
              renderHeader={() => <Header />}
              headerHeight={10}
              isHeaderFixed={false}
              parallaxHeight={10}
              parallaxBackgroundScrollSpeed={5}
              parallaxForegroundScrollSpeed={2.5}
            >
            <ProfileImage />
            <StudentInfo />
            </ParallaxScroll>
          );
      }
  }
  export default MyProfile;