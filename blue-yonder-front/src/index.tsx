import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import RectLayout from './views/RectLayout';
import SeatLayout from './views/SeatLayout';
import './index.css';
import Header from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/new/rect" component={RectLayout} />
      <Route path="/new/seat" component={SeatLayout} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
