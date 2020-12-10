import React from 'react';
import { Container, Logo, Background } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({children, ...restProps }) {
  return (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  )
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
