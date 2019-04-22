import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../constants/images/logo-blanco.png'

import * as ROUTES from '../../constants/routes';

const HeaderStyles = styled.header`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  padding: 20px 0;

  a {
    cursor: pointer;
    color: white;
    font-family: galloway;
    letter-spacing: 5px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    width: 100px;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Link to={ROUTES.NOSOTROS}>Nosotros</Link>
      <a >Portafolio</a>
      <a >Reel</a>
      <Link to={ROUTES.HOME}><img src={logo} alt="logo"/></Link>
      <a >Servicios</a>
      <a >Conoce a Hugo</a>
      <a >Contactos</a>
    </HeaderStyles>
  )
}

export default Header;
