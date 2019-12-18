import styled from 'styled-components/native';

export const Container = styled.View``;

export const Favorite = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 6px;
`;

export const Unfav = styled.TouchableOpacity``;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;
