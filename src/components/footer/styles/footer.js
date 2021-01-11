import React from 'react';
import { Frame, Item } from '../styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
}

Footer.Item = function FooterItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

