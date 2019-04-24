import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './Resources/css/app.css';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
