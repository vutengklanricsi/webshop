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
  transition: padding 1s ease;
  &:hover {
	padding: 30px
	${'' /* transform: scale(1.5); */}
	${'' /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */}
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 10px 40px;
`;
