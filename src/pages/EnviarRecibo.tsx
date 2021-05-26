import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Button, Button2} from '../components/Button';
import qrcodeImg from '../assets/qrcode.png';
import {Recibo} from '../components/Recibo';
import {UploadImage} from '../components/QrcodeUp'

export function EnviarRecibo(){
    const navigation = useNavigation(); 
    const route = useRoute(); 
    const {item} = route.params

    function handleStart(){
        navigation.navigate('Menu')
    }
    function handleStart2(){
        navigation.navigate('Menu')
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.containertittle}>
            
                <Recibo item={item}/>
    
            </View>
            <View style={style.conteinerImage} >
               <UploadImage />
            </View>
            <View style={style.button}>
                <Button2
                title={'Cancelar'}
                onPress={handleStart2}/>
        
                <Button
                title={'Enviar'}
                onPress={handleStart}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        justifyContent: 'space-evenly'
    },
    conteinerImage:{
        alignItems:"center"
    
    },
    containertittle:{
      
       alignItems:'center'
      
    },
    text: {
        fontSize: 24,
        fontWeight: 'normal',
        color: '#0C141F',
        lineHeight:45 
    },
    image:{
        marginVertical:10,
        height: Dimensions.get('window').width*0.5,
    
    },
    button: {
        justifyContent: 'flex-end',
        alignItems:'center'
    }
})