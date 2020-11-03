import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux' 

import userReducer from './Reducers/userReducer'
import restaurantReducer from './Reducers/restaurantReducer'
import reportReducer from './Reducers/reportReducer'





let allReducerCombined = {
  userRR: userReducer,
  restaurantRR: restaurantReducer,
  reportRR: reportReducer
}


let rootReducer = combineReducers(allReducerCombined)


let storeObj = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(

  <Provider store={storeObj}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

