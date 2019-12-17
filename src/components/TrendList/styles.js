import styled from 'styled-components/native';

export const Container = styled.View``;

export const Trending = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 6px;
`;

export const MoreInfo = styled.TouchableOpacity``;

export const Info = styled.View`
  flex-direction: column;
`;

export const TrendName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StarsCounter = styled.View`
  flex-direction: row;
`;

export const Stars = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 3px;
`;

export const Favorite = styled.TouchableOpacity``;
