import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ModalVisible: false
    };
  }

  ShowModalFunction(visible) {
    this.setState({ModalVisible: visible});
  }

 render() {
   return (
      <View style={styles.MainContainer}>

        <Text style={styles.TextStylecontent} onPress={() => { this.ShowModalFunction(true) } }>Demo notificatie</Text>

        <Modal
          transparent={true}
          animationType={"fade"}
          visible={this.state.ModalVisible}
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisible)} } >

          <View style={styles.ModalInsideViewHolder}>
            <View style={styles.ModalInsideView}>

              <View style={styles.Textalertholder}>
                <Text style={styles.TextStylealert}>Je promotie is verstuurd </Text>
              </View>
              <View style={styles.iconStyleholder}>
                <Icon name="times-circle"
                  size={24}
                  onPress={() => { this.ShowModalFunction(!this.state.ModalVisible)} }/>
              </View>
            </View>
          </View>
        </Modal>

      </View>
   );
 }
}

const styles = StyleSheet.create({

MainContainer :{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: (Platform.OS == 'ios') ? 20 : 0
},
ModalInsideViewHolder: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
},
ModalInsideView:{
  flexDirection: 'row',
  position: 'absolute',
  top: 63,
  backgroundColor : "#fde4ae",
  paddingTop:15,
  paddingBottom:15,
  width: '100%',
},
TextStylecontent:{
  fontSize: 14,
  color: "#000000",
  textAlign: 'center'
},
iconStyleholder:{
  alignItems: 'flex-end',
  fontSize: 14,
  color: "#191919",
  padding:10,
  paddingLeft: 0,
  marginRight:20,
},
Textalertholder: {
  flex: 1,
},
TextStylealert:{
  fontSize: 14,
  color: "#191919",
  padding: 10,
  paddingLeft: 30,
  paddingRight: 0,
  textAlign: 'center'
}
});
