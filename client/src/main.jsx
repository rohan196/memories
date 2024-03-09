import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux/thunk';

const store = configureStore(reducers, compose(applyMiddleware(thunk)))




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
