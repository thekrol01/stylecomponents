import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, disabled, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={buttonStyle}>
    <Text style={textStyle}>
      {children}
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
  alignSelf: 'center',
  color: '#f5bd00',
  fontSize: 15,
 },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    height: 45,
    backgroundColor: '#3c3c3c',
    borderRadius: 5,
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Button };
