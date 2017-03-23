import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Widget from '../templates/Widget';
import Articles from '../templates/Articles';
import Twitter from '../templates/Twitter';

const Index = () => (
  <Container>
    <Row>
      <Col md={9}>
        <Widget />
        <Articles />
      </Col>
      <Col md={3}>
        <Twitter />
      </Col>
    </Row>
  </Container>
);

export default Index;
