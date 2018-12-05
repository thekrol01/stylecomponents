import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle, buttonSectionStyle } = styles;
return (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={() => {}}
    >
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle} >
        <Text style={textStyle}>{children}Meldingstekst</Text>
      </CardSection>
      <CardSection style={buttonSectionStyle}>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);
};
const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
  },
  cardSectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonSectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '90%',
    height: 85,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
  },

};

export { Confirm };
