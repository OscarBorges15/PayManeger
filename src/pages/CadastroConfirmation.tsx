import React, {useState} from 'react';
import {SafeAreaView,
  View, 
  Text, 
  Image,  
  StyleSheet, 
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/core';

export function CadastroConfirmation(){
  
  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('Login')
  }

  return(
    <View style={styles.tela}>
    <Text style={styles.emoji}>✔</Text> 

    <Text style={styles.cadastroSalvo}>Cadastro Salvo!</Text> 
    <Text style={styles.texto1}>Tudo certo, seu cadastro está completo</Text> 
    <Text style={styles.texto2}>Agora aperte no botão abaixo para ir pra tela principal:</Text>


    
     <Button
      title={'Começar'}
      onPress={handleStart}/>


  </View>
  )
}

const styles = StyleSheet.create({

  tela: {
   flex: 1,
   backgroundColor: '#F1B656',
   alignItems: 'center',
 },

 emoji: {
  paddingTop:50,
  fontSize: 65,
  color: 'plum',
  width: 200,
  marginBottom: 55,
  textAlign: 'center',
 },

 cadastroSalvo: {
  fontSize: 30,
  color: 'white',
  width: 500,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 15,
 },

 texto1: {
  fontSize: 20,
  color: 'white',
  marginBottom: 35,
  marginTop: 35,
  textAlign: 'center',
  paddingHorizontal:30
 },

 texto2: {
  fontSize: 20,
  color: 'white',
  marginTop: 15,
  marginBottom: 65,
  textAlign: 'center',
  paddingHorizontal:30
 },
 button:{
  paddingVertical:20,
  alignItems:'center',
},

});