import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row } from 'react-grid-system';
import { config } from 'config';

import Article from '../templates/Article';

const Markdown = ({ route }) => {
  if (route.page.path.includes('/article')) {
    return <Article article={route.page} />;
  }

  return (
    <Container className="page">
      <Helmet>
        <title>{route.page.data.title + ' | ' + config.siteTitle}</title>
        <meta name="description" content={route.page.data.description || config.siteDescription} />
      </Helmet>
      <Row>
        <h1>{route.page.data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: route.page.data.body }} />
      </Row>
    </Container>
  );
};


Markdown.propTypes = {
  route: React.PropTypes.object
};

export default Markdown;
