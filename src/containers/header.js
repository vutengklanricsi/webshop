import React from 'react';
import { Header } from '../components/index';
import * as ROUTES from '../constants/routes';
import logo1 from '../logo1.png';
import { NavbarContainer } from './navbar';

export function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo alt="healthy life logo" src={logo1} to={ROUTES.HOME} />
          <strong>Red Panda Poki Bowl</strong>
        </Header.Container>
      </Header>
      <NavbarContainer />
    </>
  );
}
