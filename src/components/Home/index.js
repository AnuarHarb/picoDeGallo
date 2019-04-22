import React from 'react';
import styled from 'styled-components';
import '../../base.css';

import hugo from '../../constants/images/hugo.png';
import slogan from '../../constants/images/los-mas-salsa.png';
import globo from '../../constants/images/globo-ver-mas.png';
import flecha from '../../constants/images/flecha.png';

const HomeStyles = styled.section`
  height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  .central-image {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 2fr);
  }

  .hugo {
    grid-column: 1/5;
    grid-row: 1/4;
    width: 110%;
    margin-left: -60px;
    align-self: center;
  }

  .slogan {
    grid-column: 3/8;
    grid-row: 2/4;
    margin-left: 30px;
    width: 100%;
  }

  .globo {
    grid-column: 7/8;
    grid-row: 2/3;
    margin-left: 20px;
    margin-top: -35px;
    width: 70%;
  }

  .scroll {
    color: white;
    cursor: pointer;
    font-family: galloway;
    font-size: 16px;
    letter-spacing: 5px;
    text-align: center;
  }

  .scroll:hover {
    animation-name: jump;
    animation-duration: .4s;
    animation-iteration-count: 2;
  }

  .flecha {
    margin-top: 15px;
    width: 15px;
  }

  @keyframes jump {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 1000px) {
    .central-image {
      box-sizing: border-box;
      padding: 0 80px;
    }
  }

  @media screen and (max-width: 600px) {
    .central-image {
      box-sizing: border-box;
      padding: 0 10px;
      grid-template-rows: none;
    }

    .hugo {
      grid-column: 1/9;
      grid-row: 1/2;
      width: 100%;
      max-width: 300px;
      margin-left: 0px;
      justify-self: center;
    }

    .slogan {
      grid-column: 1/9;
      grid-row: 2/4;
      margin-left: 0px;
      width: 100%;
    }

    .globo {
      grid-column: 7/8;
      grid-row: 2/3;
      margin-left: 20px;
      margin-top: 0px;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyles>
      <article className="central-image">
        <img className="slogan" src={slogan} alt="slogan" />
        <img className="hugo" src={hugo} alt="Hugo" />
        <img className="globo" src={globo} alt="globo" />
      </article>
      <article className="scroll">
        <p>Scroll</p>
        <img className="flecha" src={flecha} alt="abajo"/>
      </article>
    </HomeStyles>
  )
}

export default Home;
