// import libraries for making a registerComponent
import React from 'react';
import { View, Text  } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}HeaderText</Text>
    </View>
);
};

const styles = {
  viewStyle: {
    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    backgroundColor: '#f5bd00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
  }
};

export { Header };
