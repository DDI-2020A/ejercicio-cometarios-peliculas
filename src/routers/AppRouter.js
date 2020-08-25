/**
 * Created by chalosalvador on 8/25/20
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Routes from '../constants/routes';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={ Routes.HOME }>
        <Home />
      </Route>
      <Route path={ Routes.SERVICES }>
        <Services />
      </Route>
      <Route path={ Routes.ABOUT }>
        <About />
      </Route>

      <Route component={ NotFound } />
    </Switch>
  );
};

export default AppRouter;
