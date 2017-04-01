import React from 'react';

import Header from '../templates/Header';
import '../styles/main.scss';

const Template = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.object
};

export default Template;
