import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from 'react-native';
import PhotoUploader from './PhotoUploader';

const styles = StyleSheet.create({
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profilepicWrap:{
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2
    },
    profilepic:{
        flex: 1,
        width: null,
        borderRadius: 100,
    }
  });

  class ProfileImage extends Component{
      render(){
          return(   
            <View style={styles.header}>
                <ImageBackground style={styles.profilepicWrap}>
                    <Image style={styles.profilepic} source={require('../../../Images/placeholder.png')} >  
                    <PhotoUploader />
                    </Image>
                </ImageBackground>
            </View>
          );
      }
  }

  export default ProfileImage;