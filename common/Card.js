import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoShop from '../assets/logo-toko.png';
import Emocon from '../assets/ray_happy.png';

const LabelShop = 'Toko Sindjaja';
const Points = '150';
const TextAlert = 'Alert';
const TextLocation = 'Locatie';
const TextQRScan = 'Scan';
const ColorIcon = '#F5BD00';
const ColorQRIcon = '#000000';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}

      <View style={styles.containerEmocon}>
        <Image
          source={Emocon}
          style={styles.emoconStyle}
          />
      </View>
      <View style={styles.containerShop}>
        <View style={styles.wrapEmocon}>
          <Image
            source={LogoShop}
            style={styles.EmoconStyle}/>
          <View>
            <Text style={styles.nameShopText}>{LabelShop}</Text>
            <Text style={styles.creditsShopText}>{Points}</Text>
          </View>
        </View>
        <View style={styles.containerUtility} >
          <View style={styles.wrapUtility}>
            <Icon name="bell" size={15} color={ColorIcon} />
            <Text style={styles.textUtility}>{TextAlert}</Text>
          </View>
          <View style={styles.wrapUtility}>
            <Icon name="map-marker" size={20} color={ColorIcon} />
            <Text style={styles.textUtility}>{TextLocation}</Text>
          </View>
          <View style={styles.wrapUtilityScan}>
            <Icon name="qrcode" size={33} color={ColorQRIcon} />
            <Text style={styles.textUtility} >{TextQRScan}</Text>
          </View>
        </View>
      </View>
    </View>

  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    elevation: 1,
    padding: 0,
    margin: 1,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#FFFFFF',
  },
  containerShop: {
    flex:4,
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignSelf: 'stretch'
  },
  containerEmocon: {
    flex:1,
    padding: 18
  },
  wrapEmocon: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f1f3f5'
  },
  emoconStyle:{
    width: 70,
    height: 70
  },
  containerUtility: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  wrapUtility: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10
  },
  wrapUtilityScan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:10
  },
  EmoconStyle: {
     width: 50,
     height: 45,
     marginLeft:0,
     marginRight:10
  },
  nameShopText: {
    fontSize: 13,
  },
  creditsShopText:{
    fontSize: 13
  },
  textUtility: {
    fontSize: 10,
    color: '#666',
    marginLeft:5
  },
};

export { Card };
