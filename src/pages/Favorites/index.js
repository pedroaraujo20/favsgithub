import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';
import FavsList from '~/components/FavsList';

import { removeFromFavs } from '~/store/modules/favs/actions';

import { Container, Favs, Title } from './styles';

export default function Favorites() {
  const favs = useSelector(state => state.favs);
  const dispatch = useDispatch();

  function handleRemoveFav(id) {
    dispatch(removeFromFavs(id));
  }

  return (
    <Background>
      <Container>
        <Header />
        <Title>Favorites</Title>
        <Favs
          data={favs}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <FavsList data={item} unfav={() => handleRemoveFav(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Favorites.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="favorite" size={20} color={tintColor} />
  ),
};
