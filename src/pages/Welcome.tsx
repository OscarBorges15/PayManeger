import React, {useState} from 'react';
import {SafeAreaView,
  View, 
  Text, 
  Image, 
  StyleSheet,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import icone from '../assets/icone.png' ;
import {Button} from '../components/Button';

export function Welcome(){
  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('UserConfirmation')
  }

  
  return(
    
    <SafeAreaView style={style.conteiner}>
        <View style={style.conteinerImage} >

        <Image 
          source={icone} 
          style={style.image}
          resizeMode="contain"/>

        </View>

    <View style={style.containertittle}>
        <Text style={style.tittle}>
            Sua plataforma  {'\n'}
            de gestao {'\n'}
            para vendas 
            </Text>
    </View>

      <View  style={style.button}>
        <Button
        title={'Entrar'}
        onPress={handleStart}
        />

      </View>

    
    </SafeAreaView>
  )
 
}
const style = StyleSheet.create({
  conteiner : {
    flex: 1,
    backgroundColor:'#F1B656'
    
  },
  image:{
    marginVertical:10,
    height: Dimensions.get('window').width*0.5,

  },
  conteinerImage:{
    alignItems:"center",
    paddingVertical:10

  },
  subtittle:{
    textAlign:'center',
    fontSize: 25,
    paddingHorizontal:18,

  },
  tittle :{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    lineHeight:45,
    paddingVertical:20,
    alignItems:'flex-start',

  },
  containertittle:{
    alignItems:'center'

  },
  contaierInput:{
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
    marginVertical:30,
    alignItems:'center'
  
  },

})