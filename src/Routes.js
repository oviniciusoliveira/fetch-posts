import React from 'react';
import Home from './templates/Home';
import HomeClassNovo from './templates/HomeClassNovo';
import Page404 from './templates/Page404';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/HomeClassNovo" component={() => <HomeClassNovo numberToIncrement={2} />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={Page404} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
