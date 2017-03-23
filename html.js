import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

const BUILD_TIME = new Date().getTime();

const HTML = ({ body }) => {
  const head = Helmet.rewind();

  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
  }

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {head.title.toComponent()}
        {head.meta.toComponent()}

        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: React.PropTypes.string,
};

export default HTML;
