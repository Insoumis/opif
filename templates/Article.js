import React from 'react';
import { Container, Row } from 'react-grid-system';

import './Article.scss';

const Article = ({ article }) => {
  return (
    <Container className="Article">
      <Row>
        <article className="main">
          <header>
            <h2>{article.title}</h2>
            <div className="meta clearfix">
              <div className="type">{article.type}</div>
              <div className="date">{article.date}</div>
            </div>
          </header>
          <div className="content" dangerouslySetInnerHTML={{ __html: article.body }} />
        </article>
      </Row>
    </Container>
  );
};

Article.propTypes = {
  article: React.PropTypes.object
};

export default Article;
