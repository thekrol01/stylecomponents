import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, Button, Alert, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ColorIcon = '#F5BD00';
const TextUtilityHome = 'Home';
const TextUtilityConfig = 'Instelling';
const TextUtilityLogout = 'Loguit';

export default class Footer extends Component{
  state = {
    animatedPress1: new Animated.Value (1),
    animatedPress2: new Animated.Value (1),
    animatedPress3: new Animated.Value (1)
  }
  animateIn1(){
    Animated.timing(this.state.animatedPress1,{
    toValue:0.88,
    duration:100
  }).start()
  }
  animateOut1(){
    Animated.timing(this.state.animatedPress1,{
    toValue:1,
    duration:200
  }).start()
  }
  animateIn2(){
    Animated.timing(this.state.animatedPress2,{
    toValue:0.88,
    duration:200
  }).start()
  }
  animateOut2(){
    Animated.timing(this.state.animatedPress2,{
    toValue:1,
    duration:200
  }).start()
  }
  animateIn3(){
    Animated.timing(this.state.animatedPress3,{
    toValue:0.88,
    duration:200
  }).start()
  }
  animateOut3(){
    Animated.timing(this.state.animatedPress3,{
    toValue:1,
    duration:100
  }).start()
  }

    render(){
        return(
            <View style = { styles.MainContainer }>
               <Text>Dummy footer pagina</Text>
               <View style={ styles.BottomView } >
                <TouchableWithoutFeedback onPressIn={()=>this.animateIn1()} onPressOut={()=>this.animateOut1()}>
                  <Animated.View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [
                      {
                      scale:this.state.animatedPress1
                      }
                    ]
                  }}>
                    <Icon name="home" size={28} color={ColorIcon} />
                    <Text style={styles.TextStyle}>{TextUtilityHome}</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPressIn={()=>this.animateIn2()} onPressOut={()=>this.animateOut2()}>
                <Animated.View style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [
                    {
                    scale:this.state.animatedPress2
                    }
                  ]
                }}>
                    <Icon name="cog" size={28} color={ColorIcon} />
                    <Text style={styles.TextStyle}>{TextUtilityConfig}</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPressIn={()=>this.animateIn3()} onPressOut={()=>this.animateOut3()}>
                <Animated.View style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [
                    {
                    scale:this.state.animatedPress3
                    }
                  ]
                }}>
                    <Icon name="sign-out" size={28} color={ColorIcon} />
                    <Text style={styles.TextStyle}>{TextUtilityLogout}</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>

               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    MainContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    BottomView:{
      width: '100%',
      height: 55,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
    ButtonHolder: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextStyle:{
      color: '#666666',
      fontSize:10
    },
});
