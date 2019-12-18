import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  Repo,
  RepoName,
  Description,
  Wrapper,
  Itens,
  Amount,
  Url,
  BackButton,
  ButtonText,
} from './styles';

export default function Repository({ navigation }) {
  const repo = navigation.getParam('item');

  return (
    <Background>
      <Container>
        <Header />
        <Repo>
          <RepoName>{repo.name}</RepoName>
          <Description>{repo.description}</Description>
          <Wrapper>
            <Itens>
              <Icon name="star" size={20} color="#FF0" />
              <Amount>{repo.stargazers.totalCount}</Amount>
            </Itens>
            <Itens>
              <FaIcon name="code-fork" size={20} color="#FFF" />
              <Amount>{repo.forks.totalCount}</Amount>
            </Itens>
            <Itens>
              <OctIcon name="issue-opened" size={20} color="#FFF" />
              <Amount>{repo.issues.totalCount}</Amount>
            </Itens>
          </Wrapper>
          <Url>{repo.url}</Url>
        </Repo>
        <BackButton onPress={() => navigation.goBack()}>
          <ButtonText>Back</ButtonText>
        </BackButton>
      </Container>
    </Background>
  );
}
