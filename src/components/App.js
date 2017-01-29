import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';

const App = ({ children }) => (
  <div>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
    {children}
  </div>
);

export default App;
