import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Widget from '../templates/Widget';
import Articles from '../templates/Articles';
import Twitter from '../templates/Twitter';

const Index = () => (
  <Container>
    <Row>
      <Widget />
    </Row>
    <Row>
      <Col md={9}>
        <Articles />
      </Col>
      <Col md={3}>
        <Twitter />
      </Col>
    </Row>
  </Container>
);

export default Index;
