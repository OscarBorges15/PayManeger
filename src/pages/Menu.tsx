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
}

export function Menu() {
  const navigation = useNavigation(); 
  const [name, setName] = useState<string>();

  async function handleStart(){
    
    navigation.navigate('EnviarRecibo');

  }

  function handleInputChange(value : string){
    setName(value);
    
  }

  const [newSkill, setNewSkill] = useState('');
  const [listSkills, setListSkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    
  
   

    if(currentHour < 12){
      setGreetings('Bom dia');
    }else if(currentHour >= 12 && currentHour <= 18){
      setGreetings('Boa tarde')
    }else{
      setGreetings('Boa noite')
    }

  }, [])

  function handleRemoveSkill(id: string) {
    Alert.alert('Deletar Skill', 'Deseja deletar a skill selecionada?', [
      {
        text: 'Não',
      },
      {
        text: 'Sim',
        onPress: () => {
          return setListSkills(oldState => oldState.filter(skill => skill.id !== id))
        }
      },
    ])
  }

  function handleAddNewSkills() {

    if(newSkill === ''){
      Alert.alert('Atenção ⚠', 'Você não nomeou nenhum produto')
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setListSkills(oldState => [...oldState, data]);

    setNewSkill('');
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Bem vindo a suas venda !!!
        </Text>
      <View style={style.header}>
        <Header/>
      <View style={style.insert}>
        <TextInput
          style={style.input}
          placeholder="Novo Produto"
          placeholderTextColor="#555"
          value={newSkill}
          onChangeText={setNewSkill}
        />
        <BtnAdicionar title="+" onPress={handleAddNewSkills} />
      </View>
      <Text style={[style.title, {marginVertical: 30}]}>Meus Produtos</Text>
      <FlatList 
        data={listSkills}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <SkillCard 
          onPress={() => handleRemoveSkill(item.id)}
          skill={item.name}
          />
        )}
        ListEmptyComponent={
          <Text style={style.empty}>Nenhum produto adicionada 🤔</Text>
        }
        showsVerticalScrollIndicator={false}
      />
      </View>
      <View  style={style.buttonModal}>
                <Button
                title={'Criar'}
                onPress={handleStart}/>
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
  title: {
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
  },
  insert: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingVertical:40,
    alignItems:'center',
    width: '60%'
  },
});
