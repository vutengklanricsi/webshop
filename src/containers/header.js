import React from 'react';
import { Header } from '../components/index';

export function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.BackgroundImage>Its the header</Header.BackgroundImage>
        <Header.Logo>its a logo</Header.Logo>
      </Header>
    </>
  );
}
