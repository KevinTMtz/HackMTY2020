import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import Layout from './views/Layout';
import RegisterPage from './views/RegisterPage';
import RectReservation from './views/RectReservation';
import './index.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/new" component={Layout} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/:id" component={RectReservation} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
