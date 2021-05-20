import React, { useState, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput, 
  Modal, 
  Alert 
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';
import {Header} from '../components/Header'
import {Load} from '../components/Load'

import {Conprovantes} from '../components/Conprovantes'
import {saveRecibo, ReciboProps} from '../libs/storage'

import {Recibo} from '../components/Recibo';
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Menu(){

  const[loading, setLoadinig] = useState(true);

  const [produto, setProduto] = useState<string>();
  const [valor, setValor] = useState<string>();

  const [isVisible, setVisible] = useState(false);
  
  const navigation = useNavigation(); 

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

  function handleInputProduto(value: string){
    setProduto(value);
  }
  function handleInputValor(value: string){
    setValor(value);
  }

  async function handleStart(){
    if(!produto)
      return Alert.alert('Preencha todos os campos');
    await AsyncStorage.setItem('@managerpay:produto', produto);
    
    if(!valor)
      return Alert.alert('Preencha todos os campos');
    await AsyncStorage.setItem('@managerpay:valor', valor);
    
    navigation.navigate('Menu');
    setVisible(!isVisible)
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Header/>
        <Text style={style.title}>
          Bem vindo a suas vendas !!!
        </Text>


      <View  style={style.button}>
        <Button
        title={'+Novo'}
        onPress={()=>{setVisible(true)}}/>
      </View>

      </View>
      <Recibo/>
      

      <View style={style.centeredView}> 
        <Modal visible={isVisible} 
        transparent={true}>
          <View style={style.centeredView}> 
            <View style={style.modalView}>
              <View style={style.containerInput}>
                <Text style={style.textInput}> Produtos </Text>
                <TextInput
                  style={style.input}
                  placeholder="Digite os produtos"
                  onChangeText={handleInputProduto}
                />
                <Text style={style.textInput}>Valor</Text>
                <TextInput 
                  style= {style.input}
                  placeholder="Digite o valor total"
                  onChangeText={handleInputValor}
                  />
    
              </View>

              <View  style={style.buttonModal}>
                <Button
                title={'Criar'}
                onPress={handleStart}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F1B656'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  title:{
    fontSize:17,
    color:'#0C141F',
    lineHeight:20,
    marginTop:15,

  },
  button:{
    paddingVertical:380,
    alignItems:'center'
  },
  buttonModal:{
    paddingVertical:20,
    alignItems:'center',
    width: '60%'
  },
  header:{
    paddingHorizontal:30,
  },
  input: {
    backgroundColor:'white',
    borderRadius:8,
    color: 'gray',
    width:'100%',
    fontSize:18,
    marginTop:5,
    padding:10,
    textAlign:'center'
  },
  containerInput: {
      justifyContent:'center',
      marginTop:50,
      paddingHorizontal:40,
      width:'100%'
  },
  textInput: {
      marginVertical:5,
      color:'#0C141F',
      fontSize:18,
      marginTop:5
  }
})