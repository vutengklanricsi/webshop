import React from 'react';
import { Header } from '../components/index';
import * as ROUTES from "../constants/routes"
import logo1 from "../logo1.png"

export function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.BackgroundImage>Its the header</Header.BackgroundImage>
        <Header.Logo alt="orange" src={logo1} to={ROUTES.HOME}/>
      </Header>
    </>
  );
}
