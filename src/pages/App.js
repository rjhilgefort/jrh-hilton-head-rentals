import React from 'react';
import styled from 'styled-components';
import { Grid, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

import NavLink from './../components/NavLink';

const Container = styled.div`
  padding-top: 50px;
`;

const App = ({ children }) => (
  <Container>
    <Navbar fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">HHI Vacation Rentals</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavLink to="/surf-scoter">Surf Scoter</NavLink>
            <NavLink to="/bradley">Bradley</NavLink>
          </Nav>
          <Nav pullRight>
            <NavLink to="/maps">Maps</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Grid>
    </Navbar>
    {children}
  </Container>
);

export default App;
