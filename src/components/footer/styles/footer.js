import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';


export const Frame = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 10px;
`;

export const Icon = styled.button`
  text-decoration: none;
  color: white;
`;
