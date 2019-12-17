import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 15px 30px;
`;

export const Trend = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 10 },
})`
  margin-top: 20px;
  align-self: stretch;
`;
