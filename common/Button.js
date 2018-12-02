import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, disabled, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={buttonStyle}>
    <Text style={textStyle}>
    {children}Button text
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
  alignSelf: 'center',
  color: '#f5bd00',
  fontSize: 15,
  paddingTop: 15,
  paddingBottom: 15
 },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#3c3c3c',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
