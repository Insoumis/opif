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

        <meta property="og:site_name" content="OPIF.info" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@InstitutOpif" />

        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,400i,700" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <script async src="https://cdn.emailjs.com/dist/email.min.js"></script>
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: React.PropTypes.string,
};

export default HTML;
