import React from 'react';
import { Header } from '../components/index';
import * as ROUTES from "../constants/routes"
import logo1 from "../logo1.png"

export function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.Logo alt="healthy life logo" src={logo1} to={ROUTES.HOME}/>
      </Header>
    </>
  );
}
