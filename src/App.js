import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignUp, About } from './pages/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.SIGNUP} component={SignUp}/>
          <Route path={ROUTES.ABOUT} component={About}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
