import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry, editable }) => {
  const { inputStyle, containerStyle, labelStyle } = styles;
  return (
  <View style={containerStyle}>
    <Text style={labelStyle}>{label}Label:</Text>
    <TextInput
      style={inputStyle}
      secureTextEntry={secureTextEntry}
      placeholder={placeHolder}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      editable={editable}
      placeholder='placeholder tekst'
      />
  </View>
);
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingRight: 20,
  },
  labelStyle: {
    fontSize: 14,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    fontSize: 14,
    lineHeight: 23,
    flex: 3,
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: .5,
    backgroundColor: '#fff',
    textAlign:'left',
    paddingLeft: 10,
  },
};

export { Input };
