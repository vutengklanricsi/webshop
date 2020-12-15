import React from 'react';
import { Frame, Text, Picture, Title, DetailLink } from './styles/card';

export default function Card({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
}

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Picture = function CardPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Detail = function CardDetail({ children, ...restProps }) {
  <DetailLink {...restProps}>{children}</DetailLink>;
};