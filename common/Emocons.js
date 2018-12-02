import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, Button, Image, Platform } from 'react-native';

export default class Emocons extends Component {
 render() {
   return (
      <View style={styles.MainContainer}>
        <Image
          source={{uri : 'https://locanza.org/assets/images/member_bert.png'}}
          style={styles.emocon}
        />
        <Image
          source={{uri : 'https://locanza.org/assets/images/member_marcel.png'}}
          style={styles.emocon}
        />
        <Image
          source={{uri : 'https://locanza.org/assets/images/member_ed.png'}}
          style={styles.emocon}
        />
        <Image
          source={{uri : 'https://locanza.org/assets/images/member_dennis.png'}}
          style={styles.emocon}
        /><Image
          source={{uri : 'https://locanza.org/assets/images/member_fred.png'}}
          style={styles.emocon}
        />
      </View>
   );
 }
}

const styles = StyleSheet.create({
  MainContainer :{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emocon: {
    width: 56,
    height: 56,
    borderRadius: 56/2,
  },
});
