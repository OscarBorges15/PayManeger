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

import AsyncStorage from '@react-native-async-storage/async-storage'

interface SkillData {
  id: string;
  name: string;
  number: number;
}

export function Menu() {
  const navigation = useNavigation(); 
  const [name, setName] = useState<string>();

  async function handleStart(){
    navigation.navigate('EnviarRecibo');
  }

  

  const [newSkill, setNewSkill] = useState('');
  const [newValor, setNewValor] = useState('');
  const [listSkills, setListSkills] = useState<SkillData[]>([]);


  

  function handleAddNewSkills() {

    if(newSkill === '' && newValor === ''){
      Alert.alert('Atenção ⚠', 'Você não nomeou um produto nem informou o seu valor')
      return;
    }

    if(newSkill === ''){
      Alert.alert('Atenção ⚠', 'Você não nomeou o produto')
      return;
    }

    if(newValor === ''){
      Alert.alert('Atenção ⚠', 'Você não informou o valor')
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
      number: newValor,
    }
  

    setListSkills(oldState => [...oldState, data]);

    setNewSkill('');
    setNewValor('');
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
          value={newSkill}
          onChangeText={setNewSkill}
        />
        <TextInput
          style={style.input}
          placeholder="Valor Produto"
          placeholderTextColor="#555"
          value={newValor}
          onChangeText={setNewValor}
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
          skill={item.name}
          valor={item.number}
          />
        )}
      />
      </View>

      <View style={style.buttonModal}>
      <Button
        title={'Criar recibo'}
        onPress={handleStart}/>
        </View>

      </ScrollView>
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
    alignItems:'center',
    marginVertical: 20,
  },
});
