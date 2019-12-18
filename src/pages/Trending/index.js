import React from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';
import TrendList from '~/components/TrendList';
import Header from '~/components/Header';

import { addToFavs } from '~/store/modules/favs/actions';

import { Container, Trend, Title } from './styles';

const GET_TRENDINGS = gql`
  query {
    search(
      query: "language:JavaScript stars:>10000"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            description
            issues(states: OPEN) {
              totalCount
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;

export default function Trending({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_TRENDINGS);
  const { edges } = data.search;

  if (error) return <Text>Server Error!</Text>;

  function handleAddFav(fav) {
    dispatch(addToFavs(fav));
  }

  function handleNavigate(item) {
    navigation.navigate('Repository', { item });
  }

  return (
    <Background>
      <Container>
        <Header />
        <Title>Trending</Title>
        {loading ? (
          <ActivityIndicator
            style={{ marginTop: 200 }}
            size="large"
            color="#FFF"
          />
        ) : (
          <Trend
            data={edges}
            keyExtractor={item => String(item.node.id)}
            renderItem={({ item }) => (
              <TrendList
                moreInfo={() => handleNavigate(item.node)}
                addToFavs={() => handleAddFav(item.node)}
                data={item}
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

Trending.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="github-circle" size={20} color={tintColor} />
  ),
};
