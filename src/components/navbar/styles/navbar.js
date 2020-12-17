import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  ${'' /* flex-direction: center; */}
  justify-content: center;
  background-color: #503004;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  font-size: 25px;
  display: flex;
  padding: 10px;
  flex-grow: wrap;
  color: #fff;
  text-decoration: none;
  transition: padding 0.5s ease;
  &:hover {
	padding: 30px
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 10px 40px;
`;
