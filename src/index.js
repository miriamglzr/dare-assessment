import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Add a response interceptor
axios.interceptors.response.use (
  function (response) {
    return response;
  },
  function (error) {
    //catches if the session ended!
    if (localStorage.getItem ('token') && error.response.status === 401) {
      console.log ('Redirection needed !');
      window.location.replace ('/');
      return;
    }
    return Promise.reject (error);
  }
);

ReactDOM.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
