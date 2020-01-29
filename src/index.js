import React from 'react';
import {
  // Switch,
  // Link,
  BrowserRouter,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import { Favourites } from './favourites';

ReactDOM.render((
  <BrowserRouter>
    <Route exact path='/' component={App}/>
    <Route path='/favourites' component={Favourites}/>
  </BrowserRouter>
), document.getElementById('root'))
