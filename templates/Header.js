import React from 'react';
import { Link } from 'react-router';
import { Container, Hidden, Visible } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <Container>
      <Hidden xs>
        <Link activeClassName="active" onlyActiveOnIndex={true} to={prefixLink('/')}><h1>Opif</h1></Link>
      </Hidden>
      <nav>
        <Hidden xs>
          <Link activeClassName="active" onlyActiveOnIndex={true} to={prefixLink('/')}>Accueil</Link>
        </Hidden>
        <Visible xs>
          <Link activeClassName="active" onlyActiveOnIndex={true} to={prefixLink('/')}><i className="fa fa-home" aria-hidden="true"></i></Link>
        </Visible>
        <Link activeClassName="active" to={prefixLink('/methodologie/')}>La méthodologie</Link>
        <Link activeClassName="active" to={prefixLink('/contact/')}>Contact</Link>
        <Link activeClassName="active" to={prefixLink('/about/')}>À propos</Link>
      </nav>
      <Hidden xs>
        <div className="baseline">
          <strong>O</strong>bservations et <strong>P</strong>révisions <strong>I</strong>ncroyablement <strong>F</strong>iables. <Hidden sm><span>Institut de Météorologie Sondagière et d'Horoscope politique.</span></Hidden>
        </div>
      </Hidden>
    </Container>
  </header>
);

export default Header;
