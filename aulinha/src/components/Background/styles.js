import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: space-around;
  background-color:aqua;
  margin: 15px;
  flex-direction: row;
`;
export const Ctext = styled.View`
  align-items: center;
  background-color:  ${prop => (prop.data ? prop.data : 'blue'  ) };
`;

export const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;
