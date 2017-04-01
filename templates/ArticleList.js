import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import './ArticleList.scss';

const ArticleList = ({ articles }) => (
  <div className="ArticleList">
    <h2>Les derniers articles certifiés Opif <i className="fa fa-thumbs-up" aria-hidden="true"></i></h2>
    <ul>
      {articles.map((article, i) => (
        <li key={i}>
          <Link className="clearfix" to={prefixLink(article.path)}>
            {(article.data.thumbnail) ?
              <img src={prefixLink(`${article.path}${article.data.thumbnail}`)} alt={article.data.title}/>
            : false}
            <div>
              <div className="meta clearfix">
                <div className="type">{article.data.type}</div>
                <div className="date">{article.data.date}</div>
              </div>
              <h3>{article.data.title}</h3>
              <p>{article.data.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

ArticleList.propTypes = {
  articles: React.PropTypes.array,
};

export default ArticleList;
