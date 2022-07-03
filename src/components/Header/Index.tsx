import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// import { Container } from './styles'

const Header: React.FC = () => {

  return (
    <View>
      <Text style={style.Title}>Hello,</Text>
      <Text style={style.SubTitle}>Mitalo</Text>
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

