import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text,   } from 'react-native';
import {useNavigation} from '@react-navigation/core';

import icone from '../assets/icone.png' ;
import {Button} from '../components/Button';
import {Header} from '../components/Header'
import {Load} from '../components/Load'
import {Conprovantes} from '../components/Conprovantes'

import {saveRecibo, ReciboProps} from '../libs/storage'


export function Menu(){
  const[loading, setLoadinig] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadinig(false);
    }, 1200 );
  }, []);

  if(loading){
    return(
      <View>
      <Load/>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Header/>
        <Text style={styles.title}>
          Bem vindo a suas vendas !!!
        </Text>


      <Button
      title={'Cadastrar Recibo'}
      />

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor:'#F1B656',
  },
  title:{
    fontSize:17,
    color:'#0C141F',
    lineHeight:20,
    marginTop:15,

  },
  header:{
    paddingHorizontal:30,


  }

 
});
