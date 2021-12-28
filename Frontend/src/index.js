import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation';
import Product from './components/product/Product';
//import Home from './components/home/Home';


// ReactDOM.render(
// <BrowserRouter><Navigation/></BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter><Product/></BrowserRouter>,
    document.getElementById('root')
  );

