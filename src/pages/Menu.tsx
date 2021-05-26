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
  number: number;
}

export function Menu() {
  const navigation = useNavigation(); 
  const [name, setName] = useState<string>();

  const [isVisible, setVisible] = useState(false);

  const [newSkill, setNewSkill] = useState('');
  const [newValor, setNewValor] = useState('');
  const [listSkills, setListSkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  async function handleStart(){
    navigation.navigate('EnviarRecibo');
  }

  function handleInputChange(value : string){
    setName(value);
    
  }
  
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

  function handleEnviar(){
    navigation.navigate('EnviarRecibo');
    setVisible(!isVisible);
  }

  function handleRemoveSkill(id: string) {
    setVisible(true)
    Alert.alert('❌ <b>Deletar Produto</b> ❌', 'Deseja deletar o produto selecionado?', [
      {
        text: 'Não'
      },
      {
        text: 'Sim',
        onPress: () => {
          return setListSkills(oldState => oldState.filter(skill => skill.id !== id))
        }
      },
    ])
  }

  function handleInputProduto(value: string){
    setNewSkill(value);
  }
  function handleInputValor(value: string){
    setNewValor(value);
  }

  function handleAddNewSkills() {

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
          placeholder="Nome Produto"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <TextInput
          style={style.input}
          placeholder="Valor Produto"
          placeholderTextColor="#555"
          onChangeText={handleInputValor}
        />
        <BtnAdicionar title="+" onPress={handleAddNewSkills} />
      </View>
      <Text style={[style.title, {marginVertical: 30}]}>Meus Produtos</Text>
      <FlatList 
        data={listSkills}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <SkillCard 
          onPress={()=>{setVisible(true)}}
          skill={item.name}
          valor={item.number}
          />
        )}
        ListEmptyComponent={
          <Text style={style.empty}>Nenhum produto adicionado 🤔</Text>
        }
        showsVerticalScrollIndicator={false}
      />
      </View>
      <View  style={style.buttonModal}>
        <Button
          title={'Criar'}
          onPress={handleStart}/>
      </View>

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
                onPress={handleEnviar}/>
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
    paddingHorizontal: 5,
    marginLeft: 5,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 55,
  },
  modalView: {
    margin: 20,
    height: 330,
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
    marginTop:5,
},
});