import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Favorite,
  MoreInfo,
  Info,
  Name,
  StarsCounter,
  Stars,
  Unfav,
} from './styles';

export default function FavsList({ data, moreInfo, unfav }) {
  return (
    <Container>
      <Favorite>
        <MoreInfo onPress={moreInfo}>
          <Info>
            <Name>{data.name}</Name>
            <StarsCounter>
              <Icon name="star" size={20} color="#FF0" />
              <Stars>{data.stargazers.totalCount}</Stars>
            </StarsCounter>
          </Info>
        </MoreInfo>
        <Unfav onPress={unfav}>
          <IonicIcon name="md-heart-dislike" size={20} color="#FFF" />
        </Unfav>
      </Favorite>
    </Container>
  );
}
