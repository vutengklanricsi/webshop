import React from 'react';
import { Container, BackgroundImage, Logo } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.BackgroundImage = function HeaderBackgroundImage({
  children,
  ...restProps
}) {
  return <BackgroundImage {...restProps}>{children}</BackgroundImage>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
