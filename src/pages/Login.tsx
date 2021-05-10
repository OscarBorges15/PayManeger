import React, {useState} from 'react';
import {SafeAreaView,
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions,
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import icone from '../assets/icone.png' ;
import {Button} from '../components/Button';

export function Login(){

  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('Menu')
  }

  return(
    <SafeAreaView style={style.conteiner}>
      <ScrollView>

      

      <View style={style.inner}>
        <View style={style.conteinerImage} >
          <Image 
            source={icone} 
            style={style.image}
            resizeMode="contain"/>
          </View>
          
          <View style={style.contaierInput}>
            <Text style={style.textInput}> Email </Text>
              <TextInput
              style={style.input}
              placeholder="Digite seu e-mail"
              />

            <Text style={style.textInput}>Senha</Text>
            <TextInput 
            style= {style.input}
            placeholder="Digite sua senha"/>
          </View>

        </View>

          <View  style={style.button}>
            <Button
            title={'Entar'}
            onPress={handleStart}/>
          </View>


      </ScrollView>
    </SafeAreaView>
  )
 
}
const style = StyleSheet.create({
  conteiner : {
    flex: 1,
    backgroundColor:'#F1B656',
  },

  inner: {
    padding: 15,
    flex:1,
    justifyContent: "space-around",

  },

  image:{
    marginVertical:10,
    height: Dimensions.get('window').width*0.5,
    padding:15,

  },
  conteinerImage:{
    alignItems:"center",
    marginTop:10,
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
  contaierInput:{
    
    justifyContent:'center',
    marginTop:50,
    paddingHorizontal:40,
    width:'100%',
    
  },
  textInput:{
    marginVertical:5,
    color:'white',
    fontSize:18,
    marginTop:5

  },
  button:{
    paddingVertical:20,
    alignItems:'center',
  },
  
})