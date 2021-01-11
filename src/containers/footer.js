import React from 'react';
import { Footer } from '../components/index';

export function FooterContainer() {
  return (
    <>
      <Footer>
      
        <Footer.Item to="/">Products</Footer.Item>
        <Footer.Item to="/">About</Footer.Item>
        <Footer.Item to="/">Contact Us</Footer.Item>
        <Footer.Item to="/">Forum</Footer.Item>
        <Footer.Item to="/">FAQ</Footer.Item>
      </Footer>
    </>
  );
}
