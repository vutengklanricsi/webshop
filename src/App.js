import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home } from './pages/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch exact path={ROUTES.HOME}>
          <Home />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
