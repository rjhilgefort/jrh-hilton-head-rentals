import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Col,
  Thumbnail,
  Button,
} from 'react-bootstrap';
import BRADLEY_THUMB from '../assets/bradley.jpg';
import SURF_SCOTER_THUMB from '../assets/surf-scoter.jpg';

const properties = {
  bradley: {
    to: '/bradley',
    thumb: BRADLEY_THUMB,
    title: 'Bradley Beach',
    description: '2nd row, open view of Bradley beach',
  },
  surf: {
    to: '/surf-scoter',
    thumb: SURF_SCOTER_THUMB,
    title: 'Surf Scoter (Sea Pines)',
    description: '5th row, the beach side of Sea Pines Drive',
  },
};


const PropertyLink = ({ thumb, to, title, description }) => (
  <Thumbnail src={thumb} alt={title}>
    <Row>
      <Col xs={9}>
        <h4>{title}</h4>
      </Col>
      <Col xs={3}>
        <Link to={to}>
          <Button bsStyle="primary">See More</Button>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <p>{description}</p>
      </Col>
    </Row>
  </Thumbnail>
);


const WelcomeContact = () => (
  <Row>
    <Col xs={6}>
      <PropertyLink {...properties.surf} />
    </Col>
    <Col xs={6}>
      <PropertyLink {...properties.bradley} />
    </Col>
  </Row>
);

export default WelcomeContact;
