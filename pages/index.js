import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import _ from 'lodash';

import Widget from '../templates/Widget';
import Articles from '../templates/Articles';
import Twitter from '../templates/Twitter';

const Index = ({ route }) => {
  let articles = [];
  route.pages.forEach( page => {
    if (page.path && page.path.includes('/article')) {
      articles.push(page);
    }
  });
  _.reverse(articles);

  return (
    <Container>
      <Row>
        <Widget />
      </Row>
      <Row>
        <Col md={12} lg={9}>
          <Articles articles={articles} />
        </Col>
        <Col md={12} lg={3}>
          <Twitter />
        </Col>
      </Row>
    </Container>
  );
};

Index.propTypes = {
  route: React.PropTypes.object,
};

export default Index;
