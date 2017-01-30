import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

const NavLink = ({ to, children }) => (
  <LinkContainer to={to}>
    <NavItem>{children}</NavItem>
  </LinkContainer>
);

export default NavLink;
