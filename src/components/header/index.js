import React from 'react';
import { Container, BackgroundImage, Logo } from './styles/header';

export default function Header({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Header.BackgroundImage = function HeaderBackgroundImage({ children, ...restProps }) {
  return <BackgroundImage {...restProps} >{children}</BackgroundImage>
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps} >{children}</Logo>
};