import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px 30px 60px;
`;

export const Repo = styled.View`
  margin-top: 30px;
`;

export const RepoName = styled.Text`
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;

export const Description = styled.Text`
  text-align: center;
  margin-top: 15px;
  color: #fff;
  font-size: 16px;
`;

export const Wrapper = styled.View`
  margin-top: 30px;
  border: 1px solid #fff;
  padding: 15px 0;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Itens = styled.View`
  flex-direction: row;
`;

export const Amount = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const Url = styled.TouchableOpacity``;

export const UrlLink = styled.Text`
  margin-top: 20px;
  align-self: center;
  color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: auto;
  border: 1px solid #ed213a;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ed213a;
`;
