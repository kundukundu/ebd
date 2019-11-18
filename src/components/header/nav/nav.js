import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
      <li>
        <a href="https://www.chiyanasimoes.com">Chiyana Simões</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
