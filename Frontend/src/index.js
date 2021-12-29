import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation';
import Product from './components/product/Product';
import ProductDetails from './components/product/ProductDetails';
import Order from './components/order/Order';
import Admin from './components/admin/Admin';
//import Home from './components/home/Home';


// ReactDOM.render(
// <BrowserRouter><Navigation/></BrowserRouter>,
//   document.getElementById('root')
// );


ReactDOM.render(
<BrowserRouter><Admin/></BrowserRouter>,
  document.getElementById('root')
);


