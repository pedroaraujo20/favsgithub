import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Trending() {
  return (
    <Background>
      <Container>
        <Header />
      </Container>
    </Background>
  );
}

Trending.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="github-circle" size={20} color={tintColor} />
  ),
};
