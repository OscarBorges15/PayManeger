import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
    valor: number;
}

export function SkillCard ({skill, valor,...rest} : SkillCardProps) {
    return(
        <TouchableOpacity
        style={styles.listContainer}
        {...rest}
        >
            <Text style={styles.listText}>Produto: {skill} {'\n'} {'\n'}Valor: {valor}</Text>
            
          
        </TouchableOpacity>
    )
    
    
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#1f1e25',
        padding: 15,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
      },
      listText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
      }
  });
