import React, {Component} from 'react';
import {hydrate} from 'react-dom';
import App from '../share/app';

hydrate(
  <App />,
  document.getElementById('app')
);