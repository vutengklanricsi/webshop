import React from 'react';
import { Container, Item, StyleLink } from './styles/navbar';

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.Item = function NavbarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Navbar.StyleLink = function NavbarStyleLink ({children, ...restProps}) {
  return (
    <StyleLink {...restProps}>
      {children}
    </StyleLink>
  )
}