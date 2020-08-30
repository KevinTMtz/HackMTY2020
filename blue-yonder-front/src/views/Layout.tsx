import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RectLayout from './RectLayout';
import SeatLayout from './SeatLayout';
import Header from './../components/Header';

const Layout: React.FC = () => (
  <div id="layout">
    <Header />
    <Switch>
      <Route path="/new/rect" component={RectLayout} />
      <Route path="/new/seat" component={SeatLayout} />
    </Switch>
  </div>
);

export default Layout;
