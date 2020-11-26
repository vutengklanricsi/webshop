import React from 'react';
import { Header } from '../components/index';

export function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.BackgroundImage>Its the header</Header.BackgroundImage>
        
        <Header.Logo src="/home/richard/coding/react/webshop/src/logo1.png" />
      </Header>
    </>
  );
}
