import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Favorites() {
  return (
    <Background>
      <Container>
        <Header />
      </Container>
    </Background>
  );
}

Favorites.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="favorite" size={20} color={tintColor} />
  ),
};
