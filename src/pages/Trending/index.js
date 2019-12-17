import React, { useState } from 'react';
import { ActivityIndicator, Text, Alert } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';
import TrendList from '~/components/TrendList';
import Header from '~/components/Header';

import { Container, Trend } from './styles';

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
            descriptionHTML
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
  const [fav, setFav] = useState([]);
  const { loading, error, data } = useQuery(GET_TRENDINGS);
  const { edges } = data.search;

  if (error) return <Text>Server Error!</Text>;

  function addToFavs(id) {
    const findById = fav.filter(f => f.id === id);
    if (findById.length > 1) {
      Alert.alert('Already in your favorites!');
      return;
    }
    const selected = edges.filter(item => item.node.id === id);

    setFav(selected);
    Alert.alert('Added to favorites');
  }

  return (
    <Background>
      <Container>
        <Header />
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
                addToFavs={() => addToFavs(item.node.id)}
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
