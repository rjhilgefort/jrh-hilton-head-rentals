import React from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';
import SlideShow from '../../components/SlideShow';
import slides from './slides';

const SurfScoter = () => (
  <Grid>
    <Row>
      <PageHeader>
        8 Surf Scoter <small>Sea Pines</small>
      </PageHeader>
    </Row>
    <Row>
      <SlideShow slides={slides} />
    </Row>
  </Grid>
);

export default SurfScoter;
