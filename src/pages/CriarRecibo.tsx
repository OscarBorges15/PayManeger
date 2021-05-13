import React from 'react';
import { Text, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';

export function CriarRecibo(){
    const navigation = useNavigation(); 
    function handleStart(){
        navigation.navigate('EnviarRecibo')
    }
    return (
        <SafeAreaView style={style.container}>
            <View style={style.containerInput}>
                <Text style={style.textInput}> Produtos </Text>
                <TextInput
                style={style.input}
                placeholder="Digite os produtos"
                />

                <Text style={style.textInput}>Valor</Text>
                <TextInput 
                style= {style.input}
                placeholder="Digite o valor total"/>
            </View>

            <View  style={style.button}>
                <Button
                title={'Criar'}
                onPress={handleStart}/>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    input: {
        backgroundColor:'white',
        borderRadius:8,
        color: 'gray',
        width:'100%',
        fontSize:18,
        marginTop:5,
        padding:10,
        textAlign:'center'
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
        marginTop:5
    },
    button: {
        paddingVertical:20,
        alignItems:'center'
    }
})
