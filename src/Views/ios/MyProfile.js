import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCBF',
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

  class MyProfile extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <Text style={styles.welcome}>
                      This is the Profile page
                      </Text>
                      </View>
          );
      }
  }

  export default MyProfile;