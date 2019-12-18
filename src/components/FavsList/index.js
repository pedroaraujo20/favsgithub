import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Favorite, Name, Unfav } from './styles';

export default function FavsList({ data, unfav }) {
  return (
    <Container>
      <Favorite>
        <Name>{data.name}</Name>
        <Unfav onPress={unfav}>
          <Icon name="md-heart-dislike" size={20} color="#FFF" />
        </Unfav>
      </Favorite>
    </Container>
  );
}
