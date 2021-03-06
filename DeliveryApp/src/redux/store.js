import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import rootSaga from './sagas'

const reducer = combineReducers({ rootReducer })
const sagaMiddleware = createSagaMiddleware()
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);



export default store

// import { compose, createStore, applyMiddleware } from 'redux';

// import rootReducer from './rootReducer';

// // eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, composeEnhancers(applyMiddleware()));