import React from 'react';
import Home from './templates/Home';
import HomeClassNovo from './templates/HomeClassNovo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/HomeClassNovo" component={() => <HomeClassNovo numberToIncrement={2} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
