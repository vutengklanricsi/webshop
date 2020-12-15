import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`
  padding: 40px 40px;
  display: block;
  margin: 60px 30px;
  border: 3px solid grey;
  border-radius: 10px;
  ${'' /* box-shadow: 5px 8px 8px 10px #888888; */}
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Text = styled.p``;

export const Picture = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
`;

export const DetailLink = styled(Link)``;
