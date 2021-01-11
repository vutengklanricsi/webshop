import React from 'react';
import { HeaderContainer } from '../containers/header';
import { NewFoods } from '../containers/newfoods';
import { SliderContainer } from '../containers/slider'
// import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <NewFoods />
      <SliderContainer />
      {/* <FooterContainer /> */}
    </>
  );
}
