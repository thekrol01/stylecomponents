import React from 'react';
import { View, Text } from 'react-native';

const CardSectionText = 'Ik ben een voorbeeld Cardsection';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
      <Text>{CardSectionText}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomWidth: 3,
    padding: 15,
    backgroundColor: '#fff',
    borderColor: '#f1f3f5',
    position: 'relative'
  }
};

export { CardSection };
