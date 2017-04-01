import React from 'react';

import Article from '../templates/Article';

const Markdown = ({ route }) => {
  return <Article article={route.page} />;
};


Markdown.propTypes = {
  route: React.PropTypes.object
};

export default Markdown;
