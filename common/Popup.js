import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, Button, Platform } from 'react-native';
import Emocons from './Emocons';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ModalVisibleStatus: false
    };
  }
  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
  }
 render() {
   return (
      <View style={styles.MainContainer}>
        <Modal
          transparent={true}
          animationType={"slide"}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >

          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.ModalInsideView}>
                    <View style={styles.TextStyle}>
                      {/* generriek componeneten kunnen hier */}
                      <Text>We waarderen je mening, daarvoor ontvang je *** punten.</Text>
                    </View>
                    <View style={styles.EmoconStyle}>
                      {/* generriek componeneten kunnen hier */}
                      <Emocons />
                    </View>
                    <View style={styles.VoteStyle}>
                      {/* generriek componeneten kunnen hier */}
                      <Button title="Stem en ontvang punten" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />
                    </View>
                </View>
            </View>
        </Modal>
        <Button onPress={() => { this.ShowModalFunction(true) }} title="Dummy feedbackknop" />
      </View>
   );
 }
}

const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalInsideView:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : "#cccccc",
    height: 250 ,
    width: '90%',
    borderRadius:10,
  },
  TextStyle:{
    flex:1,
    fontSize: 15,
    color: "#3c3c3c",
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    paddinLeft:10,
    paddingRight: 10,
  },
  EmoconStyle: {
    flex:1,
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  VoteStyle: {
    flex: 1,
    }
});
