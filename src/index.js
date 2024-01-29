import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import { Acceuil } from './Acceuil';
import { Provider } from 'react-redux'; // Example for Redux
import { reducer } from './reducer';
import { legacy_createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer)
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
