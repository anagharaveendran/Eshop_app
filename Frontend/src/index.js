import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation';
//import Home from './components/home/Home';


ReactDOM.render(
<BrowserRouter><Navigation/></BrowserRouter>,
  document.getElementById('root')
);

