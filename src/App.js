import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './styles/global';
import history from './services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
