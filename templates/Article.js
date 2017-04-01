import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row } from 'react-grid-system';
import { config } from 'config';

import Share from './Share';
import './Article.scss';

class Article extends Component {
  static propTypes = {
    article: React.PropTypes.object
  };

  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load();
    }
  }

  render() {
    const { article } = this.props;
    const url = encodeURI('http://opif.info'+article.path);
    const twitterText = encodeURI(`${article.data.title} ${url} via @InstitutOPIF`);

    return (
      <Container className="Article">
        <Helmet>
            <title>{article.data.title + ' | ' + config.siteTitle}</title>
            <meta name="description" content={article.data.description || config.siteDescription} />
        </Helmet>
        <Row>
          <article className="main">
            <header>
              <h2>
                {article.data.title}
              </h2>
              <div className="meta clearfix">
                <Share twitterText={twitterText} url={url} />
                <div className="date">{article.data.date}</div>
              </div>
            </header>
            <div className="content" dangerouslySetInnerHTML={{ __html: article.data.body }} />
            <footer>
              <Share twitterText={twitterText} url={url} />
            </footer>
          </article>
        </Row>
      </Container>
    );
  }
}

export default Article;
