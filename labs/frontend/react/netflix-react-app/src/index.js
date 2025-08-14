// node module imports
import React from 'react'; // core library
import ReactDOM from 'react-dom/client'; /// React package for working with the DOM.

import "bootstrap/dist/css/bootstrap.min.css"; // loading bootstrap
import "bootstrap/dist/js/bootstrap.min.js"; // loading bootstrap

//  custom imports
import './index.css'; // global css
import App from './App'; // app component
import reportWebVitals from './reportWebVitals'; // for analytics purpose

const root = ReactDOM.createRoot(document.getElementById('root'));
/// App component is rendered in a div element which hads an id root
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
