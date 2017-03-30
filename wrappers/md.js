import React from 'react';
import {Container, Row} from 'react-grid-system';

const Markdown = ({ route }) => (
  <Container>
    <Row>
      <h1>{route.page.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: route.page.data.body }} />
    </Row>
  </Container>
);


Markdown.propTypes = {
  route: React.PropTypes.object
};

export default Markdown;
