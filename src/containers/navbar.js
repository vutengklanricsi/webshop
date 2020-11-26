import React from 'react';
import { Navbar } from '../components/index';
import { NavbarItems } from '../constants/navbarItems';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export const NavbarContainer = () => {
  return (
    <Navbar>
      {NavbarItems.map((item) => {
        /* console.log(item); */
        return (
          <Navbar.Item key={item.id}>
            <Link to={ROUTES.HOME}>{item.NavbarItem}</Link>
          </Navbar.Item>
        );
      })}
    </Navbar>
  );
};
