import { Text, View } from 'react-native'
import React, { Component } from 'react'

import {Container, Title, Name} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo</Title>
        <Name>Mitalo</Name>
    </Container>
  );
};

export default Header;
