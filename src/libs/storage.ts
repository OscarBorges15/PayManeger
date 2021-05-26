import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ReciboProps{
    id: string;
    produto: string;
    valor: string;
    data:string;
}

interface StorageRecibo{
    [id: string]: {
        data: ReciboProps;
    }

}

export async function saveRecibo(recibo: ReciboProps) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem('@managerpay:recibo');
        const oldRecibo = data ? (JSON.parse(data) as StorageRecibo) : {};
        
        const newRecibo = {
            [recibo.id]: {
                data: recibo
            }
        }
        await AsyncStorage.setItem('@managerpay:recibo',
        JSON.stringify({
            ...newRecibo,
            ...oldRecibo
        })
        )
    }catch (error) {
        throw new Error(error);
    }
}

export async function loadRecibo() : Promise<ReciboProps[]> {
    try {
        const data = await AsyncStorage.getItem('@managerpay:recibo');
        const recibos = data ? (JSON.parse(data) as StorageRecibo) : {};
        
        const reciboSorted = Object
        .keys(recibos)
        .map((recibo)=> {
            return {
                ...recibos[recibo].data
            }
        })
        return reciboSorted;
    }catch (error) {
        throw new Error(error);
    }
}