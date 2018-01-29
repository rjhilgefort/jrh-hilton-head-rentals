import React from 'react';
import {
  Grid,
} from 'react-bootstrap';
import WelcomeContact from './lib/WelcomeContact';
import PropertyLinks from './lib/PropertyLinks';

const Home = () => (
  <Grid>
    <WelcomeContact />
    <PropertyLinks />
  </Grid>
);

export default Home;
