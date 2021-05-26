import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  SafeAreaView,
  FlatList, 
  Modal, 
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';
import {BtnAdicionar} from '../components/BtnAdicionar';
import {SkillCard} from '../components/SkillCard';
import {Header} from '../components/Header'

import {Load} from '../components/Load';

import AsyncStorage from '@react-native-async-storage/async-storage'

interface SkillData {
  id: string;
  name: string;
  number: number;
}

export function Menu() {
  const navigation = useNavigation(); 
  const [name, setName] = useState<string>();

  const [isVisible, setVisible] = useState(false);

  const [newSkill, setNewSkill] = useState('');
  const [newValor, setNewValor] = useState('');
  const [listSkills, setListSkills] = useState<SkillData[]>([]);
  const[loading, setLoadinig] = useState(true);
  const [itemModal, setItemModal] = useState(null);

  function handleEnviar(item: any){
    navigation.navigate('EnviarRecibo',{item});

    setVisible(!isVisible);
  }

  function handleRemoveSkill(id: string) {
    setVisible(!isVisible);
    setListSkills(oldState => oldState.filter(skill => skill.id !== id))
  }
  
    
    useEffect(() => {
      setTimeout(() => {
        setLoadinig(false);
      }, 1200 );
    
    }, [ ]);
    
    if(loading){
      return(
        <View>
        <Load/>
        </View>
      )
    }
  
  function handleInputProduto(value: string){
    setNewSkill(value);
  }
  function handleInputValor(value: string){
    setNewValor(value);
  }

  function handleAddNewSkills() {
    if(newSkill === '' && newValor === ''){
      Alert.alert('Atenção ⚠', 'Você não nomeou um produto nem informou o seu valor')
      return;
    }

    if(!newSkill)
      return Alert.alert('Atenção ⚠', 'Você não nomeou o produto');
    AsyncStorage.setItem('@ManagerPay:produto', newSkill);
    

    if(!newValor)
      return Alert.alert('Atenção ⚠', 'Você não informou o valor');
    AsyncStorage.setItem('@ManagerPay:valor', newValor);
    

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
      number: newValor,
    }  

    setListSkills(oldState => [...oldState, data]);

    setNewSkill('');
    setNewValor('');
  }
  const openModal = (item: any) =>{
    setItemModal(item)
    setVisible(true)
  }
  

  return (
    <SafeAreaView style={style.container}>
      
      <View style={style.header}>
        <Header/>
      </View>

      <View style={style.insert}>
        <TextInput
          style={style.input}
          placeholder="Nome Produto"
          placeholderTextColor="#555"
          onChangeText={handleInputProduto}
        />
        <TextInput
          style={style.input}
          placeholder="Valor Produto"
          placeholderTextColor="#555"
          onChangeText={handleInputValor}
        />
        <BtnAdicionar title="+" onPress={handleAddNewSkills} />
      </View>
      
      <View style={style.titulo}>
        <Text style={[style.tituloTexto, {marginVertical: 30}]}>Meus Produtos</Text>
      </View>

      <ScrollView style={style.conteinerList} showsVerticalScrollIndicator = {false}>
      
        <View>
          <FlatList 
            data={listSkills}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
              <SkillCard 
              onPress={()=>openModal(item)}
              skill={item.name}
              valor={item.number}
              />
            )}
          />
        </View>
        
      </ScrollView>
      <View style={style.centeredView}> 
        <Modal visible={isVisible} 
        transparent={true}>
          <View style={style.centeredView}> 
            <View style={style.modalView}>
              <View style={style.containerInput}>      
                <Text style={style.textInput}>Deseja deletar ou enviar o recibo selecionado?</Text>
              </View>

            
              <View  style={style.buttonModal}>
                <Button
                title={'Enviar'}
                onPress={()=>handleEnviar(itemModal)}/>
                <Button
                title={'Deletar'}
                onPress={()=>{handleRemoveSkill(itemModal.id)}}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1B656',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  titulo: {
   paddingHorizontal: 37,
  },

  tituloTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: 5,
  },

  conteinerList:{
    marginHorizontal:30,
    
  },

  insert: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  empty: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 18,
    marginTop: 90,
  },

   header:{
    paddingHorizontal:30,
  },

  buttonModal:{
    justifyContent: 'center',
    alignItems:'stretch',
    marginVertical: 2,
    flexDirection: "row",
    paddingHorizontal:70,
    marginHorizontal: 2
  },
  containerInput: {
    justifyContent:'center',
    marginTop:50,
    paddingHorizontal:40,
    width:'100%'
  },
  textInput: {
      marginVertical:35,
      color:'#0C141F',
      fontSize:18,
      marginTop:5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 55,
  },
  modalView: {
    margin: 20,
    height: 230,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});