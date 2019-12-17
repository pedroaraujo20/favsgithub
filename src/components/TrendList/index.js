import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Trending,
  TrendName,
  MoreInfo,
  Info,
  StarsCounter,
  Stars,
  Favorite,
} from './styles';

export default function TrendList({ data, moreInfo, addToFavs }) {
  return (
    <Container>
      <Trending>
        <MoreInfo onPress={moreInfo}>
          <Info>
            <TrendName>{data.node.name}</TrendName>
            <StarsCounter>
              <Icon name="star" size={20} color="#FF0" />
              <Stars>{data.node.stargazers.totalCount}</Stars>
            </StarsCounter>
          </Info>
        </MoreInfo>
        <Favorite onPress={addToFavs}>
          <Icon name="favorite" size={20} color="#FFF" />
        </Favorite>
      </Trending>
    </Container>
  );
}
