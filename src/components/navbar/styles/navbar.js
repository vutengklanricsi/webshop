import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: row-reverse;
	background-color: #A7F028;
	flex-wrap: wrap;
`;

export const Item = styled.div`
	font-size: 25px;
	display: flex;
	padding: 10px;
	flex-grow: wrap;
	color: #fff;
	text-decoration: none;
`;

export const StyleLink = styled(Link)`
	text-decoration: none;
	color: #fff;
`