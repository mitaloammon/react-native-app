import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// import { Container } from './styles'

import {Props} from './types';

const Header =(props: Props) => {

  return (
    <View>
      <Text style={style.Title}>{props.title}</Text>
      <Text style={style.SubTitle}>{props.name}</Text>
    </View>
  );

};

export default Header;

const style = StyleSheet.create({
  Title:{
      color: 'black',
      fontSize: 30,
  },

  SubTitle:{
      color: 'black',
      fontSize: 20,
  }
})

