import React from 'react';
import { View,  StyleSheet, Text, Image  } from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import perfilImg from '../assets/perfil.png'; 


export function Header(){
  return(
    <View style={styles.container}>
     
      <View>
        <Text style={styles.comprimento}>Olá</Text>
        <Text style={styles.username}>Oscar</Text>
        </View>
      
      <Image source={perfilImg} style={styles.image}/>



    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    marginTop:getStatusBarHeight(),
  
   
  },
  image:{
    width:80,
    height:80,
    borderRadius:40
  },
  comprimento:{
    fontSize:32,
    color:'#0C141F'
    

  },
  username:{
    fontSize:32,
    color:'#0C141F',
    lineHeight:40

  }
})