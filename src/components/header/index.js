import React from 'react';
import { Container, BackgroundImage, LogoLink, Logo } from './styles/header';


export default function Header({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Header.BackgroundImage = function HeaderBackgroundImage({ children, ...restProps }) {
  return <BackgroundImage {...restProps} >{children}</BackgroundImage>
};

Header.LogoLink = function HeaderLogoLink({src, children, ...restProps }) {
  return (
    <LogoLink {...restProps}>
      <Logo />
    </LogoLink>
  )
  
};