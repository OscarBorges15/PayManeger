import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button, Button2} from '../components/Button';
import qrcodeImg from '../assets/qrcode.png';
import {Recibo} from '../components/Recibo';
export function EnviarRecibo(){
    const navigation = useNavigation(); 
    function handleStart(){
        navigation.navigate('Menu')
    }
    function handleStart2(){
        navigation.navigate('Menu')
    }
    return (
        <SafeAreaView style={style.container}>
            <View style={style.containertittle}>
            
                <Recibo/>
    
            </View>
            <View style={style.conteinerImage} >
                <Image 
                    source={qrcodeImg} 
                    style={style.image}
                    resizeMode="contain"/>
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
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingHorizontal:18,
        paddingVertical:30
    
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