// External dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Stylesheets
import '../assets/stylesheets/application.scss';
// Components and internal dependencies
import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />,
    root);
}
