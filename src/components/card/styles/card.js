import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`
  background-color: #E8500A;
  padding: 40px 40px 15px 40px;
  display: block;
  margin: 60px 40px;
  border: 3px solid white;
  border-radius: 10px;
  text-align: center;
  transition: padding 0.2s;

  &:hover {
    padding: 50px 50px 20px 50px;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
`;

export const Picture = styled.img`
  align-items: center;
  width: 350px;
  height: 350px;
  border-radius: 10px;
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
