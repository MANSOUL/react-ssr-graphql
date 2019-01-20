import React, {Component} from 'react';
import {hydrate} from 'react-dom';
import App from '../share/app';
import { BrowserRouter } from 'react-router-dom';

const cssContext = {
  insertCss(...styles) {
    styles.forEach(style => style._insertCss())
  }
}

hydrate(
  <BrowserRouter>
    <App cssContext={cssContext}/>
  </BrowserRouter>,
  document.getElementById('app')
);