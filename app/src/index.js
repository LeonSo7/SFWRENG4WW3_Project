import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
