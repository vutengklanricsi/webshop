import React from 'react';
import { Footer } from '../components/index';

export function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Item>Products</Footer.Item>
        <Footer.Item>About</Footer.Item>
        <Footer.Item>Contact Us</Footer.Item>
        <Footer.Item>Forum</Footer.Item>
        <Footer.Item>FAQ</Footer.Item>
      </Footer>
    </>
  );
}
