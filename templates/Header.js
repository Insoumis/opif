import React from 'react';
import { Link } from 'react-router';
import { Container } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <Container>
      <h1>Opif</h1>
      <nav>
        <Link activeClassName="active" onlyActiveOnIndex={true} to={prefixLink('/')}>Accueil</Link>
        <Link activeClassName="active" to={prefixLink('/methodologie/')}>La méthodologie</Link>
      </nav>
      <div className="baseline"><span>O</span>bservations et <span>P</span>révisions <span>I</span>ncroyablement <span>F</span>iables. Institut de Météorologie Sondagière et d'Horoscope politique.</div>
    </Container>
  </header>
);

export default Header;
