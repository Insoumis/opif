import React from 'react';
import { Container, Row } from 'react-grid-system';

import Article from '../templates/Article';

const Markdown = ({ route }) => {
  if (route.page.path.includes('/article')) {
    return <Article article={route.page.data} />;
  }

  return (
    <Container>
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
