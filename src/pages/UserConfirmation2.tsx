import React from 'react';
import { View, TextInput, StyleSheet, Image, Text,ScrollView, SafeAreaView, Dimensions, KeyboardAvoidingView} from 'react-native';

import icone from '../assets/icone.png' ;

import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';

export function UserConfirmation2(){
  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('Menu')
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


        <Text style={styles.textInput}>Qual seu CPF?</Text>
          <TextInput
            style={styles.input}
            placeholder = "XXX. XXX. XXX-XX"
          />

      </View>

          <View  style={styles.button}>
            <Button
            title={'Confirmar'}
            onPress={handleStart}/>
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
      marginBottom:40,
      padding:10,
      textAlign:'center',
  
    },
  
    textInput:{
      marginVertical:5,
      color:'white',
      fontSize:23,
      marginBottom: 20,
      textAlign:'center',
      
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