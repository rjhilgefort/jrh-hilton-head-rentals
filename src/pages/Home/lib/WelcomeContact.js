import React from 'react';
import {
  Jumbotron,
  Row,
  Col,
} from 'react-bootstrap';

const Welcome = () => (
  <div>
    <h3>Welcome!</h3>
    <p>
      Below you can find links to our Hilton Head Island vacation
      rental properties. If you have any questions, please get in touch with us!
    </p>
  </div>
);

// TODO: Make the phones and emails things they can click and do something with
const Contact = () => (
  <ul>
    <li>hhivacationrental@gmail.com</li>
    <li>Jim Hilgefort</li>
    <ul>
      <li>1-859-640-3637</li>
    </ul>
    <li>Clara Hilgefort</li>
    <ul>
      <li>1-513-378-1400</li>
    </ul>
  </ul>
);

const WelcomeContact = () => (
  <Row>
    <Jumbotron>
      <Row>
        <Col xs={9}>
          <Welcome />
        </Col>
        <Col xs={3}>
          <Contact />
        </Col>
      </Row>
    </Jumbotron>
  </Row>
);

export default WelcomeContact;
