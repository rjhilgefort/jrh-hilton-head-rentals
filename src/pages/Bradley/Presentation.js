import React from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';
import SlideShow from '../../components/SlideShow';
import slides from './slides';

const Bradley = () => (
  <Grid>
    <Row>
      <PageHeader>
        26 Bradley Circle <small>Bradley Beach</small>
      </PageHeader>
      <h1></h1>
    </Row>
    <Row>
      <SlideShow slides={slides} />
    </Row>
  </Grid>
);

export default Bradley;
