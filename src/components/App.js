import React, { Component } from 'react';
import styled from 'styled-components';
import '../base.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import HomePage from './Home';
import NosotrosPage from './Nosotros';

import * as ROUTES from '../constants/routes';

const AppStyles = styled.section`
  background-image: linear-gradient(to bottom, var(--background-top), var(--background-bottom));
  height: 100vh;
  overflow-y: scroll;

  .content {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppStyles>
            <section className="content">
              <Header />
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.NOSOTROS} component={NosotrosPage} />
            </section>
        </AppStyles>
      </Router>
    );
  }
}

export default App;
