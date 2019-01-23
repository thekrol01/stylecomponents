import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, Button, Platform, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Message extends Component {
   constructor(props) {
      super(props);
      this.state = {fadeIn: new Animated.Value(0),
                    fadeOut: new Animated.Value(1),
                   };
                 }
   fadeIn() {
     this.state.fadeIn.setValue(0)
     Animated.timing(
       this.state.fadeIn,
       {
         toValue: 1,
         duration: 2000,
       }
     ).start(() => this.fadeOut());
  }
  fadeOut() {
    this.state.fadeIn.setValue(1)
    Animated.timing(
       this.state.fadeIn,
       {
         toValue: 0,
         duration: 800,
       }
    ).start();
  }

  render() {
    return(
       <View style={styles.MainContainer}>

           <Animated.View style={styles.animationWrap, {opacity: this.state.fadeIn}}>
              <View style={styles.ModalInsideView}>
                <Text style={styles.TextStylealert}>Je post is geplaats!</Text>
             </View>
           </Animated.View>
           <View style={styles.demoKnop}>
              <TouchableOpacity
                  onPress={() => this.fadeIn()}
                  activeOpacity={0.8}
                  >
                  <Text>Demo toon alert</Text>
              </TouchableOpacity>
            </View>

       </View>
   );
 }
}


const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
    flexDirection: 'column',
  },
  animationWrap: {
    flex: 1,
    width: '100%',
  },
  ModalInsideView:{
    flexDirection: 'row',
    backgroundColor : "#fad374",
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStylealert:{
    fontSize: 14,
    color: "#191919",
    padding: 0,
    textAlign: 'center'
  },
  demoKnop : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }

})
