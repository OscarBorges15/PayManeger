import  React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ReciboProps{
  item:any
}

export const Recibo:React.FC<ReciboProps> = ({item})=>{

  // const [produto, setProduto] = useState<string>();
  // const [valor, setValor] = useState<string>();

  // useEffect(()=> {
  //   async function loadStorageRecibo(){
  //     const produto = await AsyncStorage.getItem('@ManagerPay:produto');
  //     const valor = await AsyncStorage.getItem('@ManagerPay:valor');
  //     setProduto(produto || '');
  //     setValor(valor || '');
  //   }
  //   loadStorageRecibo();
    
  // },[]);

  return(

      <View style={styles.container}>
        <Text style={styles.comprimento}>Recibo</Text>
        <Text style={styles.text}> 
            Itens: {item.name} {'\n'}
            Valor: {item.number}
        </Text>
      </View>

    
  )
}

const styles = StyleSheet.create({
  container:{
    
    width:'120%',
    backgroundColor:'white',
    borderRadius:30,
    height:90,
    alignItems:'center',
    justifyContent:'center',
    margin:20
    
  },
  comprimento:{
    fontSize:20,
    color:'#0C141F'
  },
  text:{
    fontSize:16,
    color:'#0C141F',
    lineHeight:40,
    alignItems: 'flex-start',
    flexDirection:'row'
  }
})