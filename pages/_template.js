import React from 'react';
import Helmet from 'react-helmet';

import Header from '../templates/Header';
import { config } from 'config';
import '../styles/main.scss';

const Template = ({ children }) => (
  <div>
    <Helmet
        title={config.siteTitle}
        description={config.siteDescription}
    />
    <Header />
    <div>{children}</div>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.object
};

export default Template;
