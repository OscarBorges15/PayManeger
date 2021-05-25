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
import {Header} from '../components/Header';

import {Load} from '../components/Load';



import AsyncStorage from '@react-native-async-storage/async-storage'

interface SkillData {
  id: string;
  name: string;
}

export function Menu() {
  const navigation = useNavigation(); 
  const [name, setName] = useState<string>();

  const [newSkill, setNewSkill] = useState('');
  const [listSkills, setListSkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  const[loading, setLoadinig] = useState(true);
  const [isVisible, setVisible] = useState(false);


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
  async function handleStart(){
    navigation.navigate('EnviarRecibo');

  }

  function handleInputChange(value : string){
    setName(value);
    
  }


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
      <View style={style.header}>
        <Header/>
      </View>


      <View style={style.insert}>
        <TextInput
          style={style.input}
          placeholder="Novo Produto"
          placeholderTextColor="#555"
          value={newSkill}
          onChangeText={setNewSkill}
        />
      </View>
 
      <View style={style.conteinerList}>
      <Text style={[style.title, {marginVertical: 30}]}>Meus Produtos</Text>
      </View> 

      <ScrollView>
       <View style={style.conteinerList}>
       
        <FlatList 
          data={listSkills}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            
            <SkillCard 
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name} /> 

          )}

          ListEmptyComponent={
            <Text style={style.empty}>Nenhum produto adicionada 🤔 </Text>
          } showsVerticalScrollIndicator={false} />

          

            
        </View>

        <View  style={style.buttonModal}>
          <Button
            title={'Criar'}
            onPress={handleAddNewSkills}/>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1B656',
    
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
    width:"100%",
    height:50,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    borderRadius: 10,
  },
  insert: {
    marginHorizontal:30,
    alignItems:'center',
    justifyContent:'center',
   
  },
  conteinerList:{
    marginHorizontal:30,
    
  },

  conteinerRecibo:{
    padding:15,
    flex:1,
    alignItems:'center',


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
    elevation: 5,
  },

  
  empty: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 18,
    marginTop: 90,
  },
   header:{
    marginHorizontal:30,
    alignItems:'center'
  },

  buttonModal:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    
  },
});
