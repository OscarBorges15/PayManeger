import React, {useState} from 'react';
import { View, Alert, TextInput, StyleSheet, Image, Text,ScrollView, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform,TouchableWithoutFeedback} from 'react-native';

import icone from '../assets/icone.png' ;

import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage'

export function UserConfirmation(){
  const navigation = useNavigation(); 
  const [name, setName] = useState<string>();

  function handleInputChange(value : string){
    setName(value);
    
  }

  async function handleStart(){
    if(!name)                                                 // funcao que verifica se o usuario preencheu o nome
        return Alert.alert('Digite todos os dados 😥');      // caso nao tenha nada digitado 
      
       await AsyncStorage.setItem('@ManagerPay:user', name);  // chave para salvar no dispositivo o nome do usuario
    navigation.navigate('UserConfirmation2')              // navegacao para a proxima page
  }

  return (
    <SafeAreaView style={styles.tela}>
      <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
     
    
        <View style={styles.content}>
          <View style={styles.form}>

            <View style={styles.Header}>
              <Image 
                  source={icone} 
                  style={styles.image}
                  resizeMode="contain"
                />
            </View>

            <View style={styles.conteinertextInput}>
              <Text style={styles.textInput}>Como podemos lhe chamar?</Text>
              <TextInput
              style={styles.input}
              placeholder = "Nome Completo"
              onChangeText={handleInputChange}
              />
            </View>
            
            <Button
              title={'Confirmar'}
              onPress={handleStart}/>
            
          
          </View>
        </View>
      </KeyboardAvoidingView>
  </SafeAreaView>
 )
};




const styles = StyleSheet.create({

  tela: {
   flex: 1,
   backgroundColor:'#F1B656',
  
  },
  content:{
    flex:1,
    width:'100%',

  },
  form:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width:'100%'

  },
  conteinerImage:{
    alignItems:"center",
    marginTop:10,
  },
  conteinertextInput:{
    width:'72%',
    
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
    width:'100%',
     marginTop:40,
     paddingHorizontal:20,
    
  },
  Header:{
    alignItems:'center'
  },
  
});