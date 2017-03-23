import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import '../styles/main.scss';

const Template = ({ children }) => (
  <div>
    <Helmet
        title={config.siteTitle}
        description={config.siteDescription}
    />
    <div>{children}</div>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.object
};

export default Template;
