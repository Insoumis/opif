import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'react-grid-system';
import { config } from 'config';
import _ from 'lodash';

import Widget from '../templates/Widget';
import ArticleList from '../templates/ArticleList';
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
      <Helmet>
          <title>Opif | Observations et Prévisions Incroyablement Fiables</title>
          <meta name="description" content={config.siteDescription} />
          <meta property="og:title" content="Opif | Observations et Prévisions Incroyablement Fiables" />
          <meta property="og:description" content={config.siteDescription} />
          <meta property="og:image" content="http://opif.info/assets/preview.png" />
          <meta property="og:image:width" content="1482" />
          <meta property="og:image:height" content="778" />
          <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/*<Row>
        <Widget />
      </Row>*/}
      <Row>
        <Col md={12} lg={9}>
          <ArticleList articles={articles} />
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
