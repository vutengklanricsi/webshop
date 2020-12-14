import React from 'react';
import { Navbar } from '../components/index';
import { NavbarItems } from '../constants/navbarItems';

export const NavbarContainer = () => {
  return (
    <Navbar>
      {NavbarItems.map((item) => {
        {/* console.log(item); */}
        return (
          <Navbar.Item key={item.id}>
            <Navbar.StyleLink to={item.Route}>
              {item.NavbarItem}
            </Navbar.StyleLink>
          </Navbar.Item>
        );
      })}
    </Navbar>
  );
};
