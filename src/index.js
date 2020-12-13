import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'

//Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'
import bug from './Models/bugModel';
//Redux Configure
const reducer = combineReducers({
  auth:authReducer,
  bugs:bugReducer,
  user:userReducer,
})
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

