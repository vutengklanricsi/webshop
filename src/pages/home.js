import React from 'react';
import { HeaderContainer } from '../containers/header';
import { NewFoods } from '../containers/newfoods';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <NewFoods />
    </>
  );
}
