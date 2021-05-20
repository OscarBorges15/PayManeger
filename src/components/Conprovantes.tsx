import  React from 'react';
import {
  View, 
  Text,   
  StyleSheet,
  Animated,
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {Feather} from '@expo/vector-icons'

import {formatDistance} from 'date-fns';
import {pt} from 'date-fns/locale';


interface ComprovantProps extends RectButtonProps{
  data:{
    name: 'comprovante1';
    valor:'comprovante1';
    hour:'comprovante1';

  };
  handleRemove:() => void;
}

export const Conprovantes = ({ data, handleRemove, ...rest} : ComprovantProps) => {
  return (
    <Swipeable
    overshootRight={false}
    renderRightActions={() =>(
      <Animated.View>
        <View>
          <RectButton
          style={styles.buttonRemove}
          onPress={handleRemove}
          >
              <Feather name="trash" size={32} color={'white'} /> 
            </RectButton>
          </View>
        </Animated.View>

    )}
    
    >
      <RectButton
      style={styles.container}
      {...rest}
      >
        
        <Text style={styles.title}>
          { data.name }
        </Text>


        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Regar as 
          </Text>

          <Text style={styles.time}>
            {data.hour}
          </Text>
      
      </View> 


        </RectButton>
      </Swipeable>
  )
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:25,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:"gray",
    marginVertical:5,
  
  },
  title:{
    flex:1,
    marginLeft:10,
    fontSize:17,
  },
  details:{
    alignItems:'flex-end',

  },
  timeLabel:{
    fontSize:16,


  },
  time:{
    marginTop:5,
    fontSize:16,
  

  },
  buttonRemove:{
    width:100,
    height:85,
    backgroundColor:'red',
    marginTop:15,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:15,
    right:20,
  }

  
})