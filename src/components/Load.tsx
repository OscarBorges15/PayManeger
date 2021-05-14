import React from 'react';
import LottieView from 'lottie-react-native';
import { View, KeyboardAvoidingView, StyleSheet, Text,   } from 'react-native';

import LoadAnimation from '../assets/load.json'

export function Load(){

  return(
    <View style={styles.container}>
      <LottieView 
      source={LoadAnimation}
      autoPlay
      loop
      style={styles.animationn}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  animationn:{
   paddingVertical:150,
    backgroundColor:"transparent",
    width:200,
    height:200,

  }
})