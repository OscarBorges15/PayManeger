import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function BtnAdicionar({title, ...rest} : ButtonProps) {
  return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: '#1f1e25',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f1e25',
  }
});
