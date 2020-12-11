import React from 'react';
import { Navbar } from '../components/index';
import { NavbarItems } from '../constants/navbarItems';
import * as ROUTES from '../constants/routes';

export const NavbarContainer = () => {
  return (
    <Navbar>
      {NavbarItems.map((item) => {
        /* console.log(item); */
        return (
          <Navbar.Item key={item.id}>
            <Navbar.StyleLink to={ROUTES.HOME}>
              {item.NavbarItem}
            </Navbar.StyleLink>
          </Navbar.Item>
        );
      })}
    </Navbar>
  );
};
