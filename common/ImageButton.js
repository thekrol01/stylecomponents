import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ImageButton = ({ onPress, disabled, name, style }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={style} >
    <FontAwesome name={name} size={32} color="black" />
    </TouchableOpacity>
  );
};

export { ImageButton };
