import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';

const styles = StyleSheet.create({
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    profilepicWrap:{
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3
    },
    profilepic:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
    }
  });

  class ProfileImage extends Component{
      render(){
          return(   
            <View style={styles.header}>
                <View style={styles.profilepicWrap}>
                    <Image style={styles.profilepic} source={require('../../../Images/placeholder.png')} >  
                    </Image>
                </View>
            </View>
          );
      }
  }

  export default ProfileImage;