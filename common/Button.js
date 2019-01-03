import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonText = 'Ik ben een knop';

const Button = ({ onPress, disabled, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
        {ButtonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
 },
  buttonStyle: {
    backgroundColor: '#F5BD00',
    borderRadius: 5,
    height: 45,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 3,
  }
};

export { Button };
