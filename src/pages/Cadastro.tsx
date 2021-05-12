import React from 'react';
import { View, TextInput, StyleSheet, Image, Text,ScrollView, SafeAreaView, Dimensions,} from 'react-native';

import icone from '../assets/icone.png' ;

import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';

export function Cadastro(){
  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('CadastroConfirmation')
  }

  return (
    <SafeAreaView style={styles.tela}>
       
      <View style={styles.conteinerImage} >
       <Image 
          source={icone} 
          style={styles.image}
          resizeMode="contain"/>
      </View>

    <ScrollView style={styles.scroll}>

      <View style={styles.conteinerForms}>
        <Text style={styles.textInput}>Nome Completo:</Text>
        <TextInput
          style={styles.input}
          placeholder = " Nome Completo*"
        />


        <Text style={styles.textInput}>Nome da Empresa (Opcional):</Text>
        <TextInput
          style={styles.input}
          placeholder = " Nome Empresa*"
        />


        <Text style={styles.textInput}>Número do Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder = " +(00)(00) 00000 0000*"
        />


        <Text style={styles.textInput}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder = " XXX. XXX. XXX-XX"
          />

      </View>

          <View  style={styles.button}>
            <Button
            title={'Cadastrar'}
            onPress={handleStart}/>
          </View>

      <View style={styles.textAviso}> 
        <Text style={styles.aviso}> ⚠️️️️️ Importante!</Text>
        <Text style={styles.aviso}>Preencha todos os dados obrigatórios</Text>
      </View>
  
      </ScrollView>
  </SafeAreaView>
 )
};




const styles = StyleSheet.create({

  tela: {
   flex: 1,
   backgroundColor:'#F1B656',
  
  },
  scroll:{
    flex: 1,

  },
  conteinerImage:{
    alignItems:"center",
    marginTop:10,
  },
  
  conteinerForms:{
    justifyContent:"center",
    marginTop:50,
    paddingHorizontal:40,
    width:'100%',
   },

   input:{
    backgroundColor:'white',
    borderRadius:8,
    color: 'gray',
    width:'100%',
    fontSize:18,
    marginTop:5,
    padding:10,
    textAlign:'center',

  },

  textInput:{
    marginVertical:5,
    color:'white',
    fontSize:18,
    marginTop:10
  },

  aviso: {
   fontSize: 15,
   color: 'white',
   marginLeft: 15,
   marginBottom: 10,
  },
  textAviso:{
    alignItems:'center',
    justifyContent:'center'
  },

  image:{
    marginVertical:10,
    height: Dimensions.get('window').width*0.5,
  },

  button:{
    paddingVertical:20,
    alignItems:'center',
    
  },
  

});