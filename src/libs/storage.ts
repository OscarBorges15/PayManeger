import AsyncStorage from '@react-native-async-storage/async-storage'
import {format} from 'date-fns'


export interface ReciboProps {
  id : string;
  itens: string;
  valor: number;
  dateTime: Date; 
}

interface StorageReciboProps {
  [id: string]:{
    data:ReciboProps;
  }
}

export async function saveRecibo(recibo: ReciboProps) : Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@ManagerPay:Recibos');
    const oldRecibos = data ? (JSON.parse(data) as StorageReciboProps) : {};

    const newRecibo ={
      [recibo.id] : {
        data: recibo

      }

    }

    await AsyncStorage.setItem('@ManagerPay:Recibos', JSON.stringify({
      ...newRecibo,
      ...oldRecibos
    }));


  }catch (error){
    throw new Error(error)
  }

}


export async function LoadRecibo() : Promise<StorageReciboProps> {
  try {
    const data = await AsyncStorage.getItem('@ManagerPay:Recibos');
    const oldRecibos = data ? (JSON.parse(data) as StorageReciboProps) : {};

   

      return recibo;
  }catch (error){
    throw new Error(error)
  }

}