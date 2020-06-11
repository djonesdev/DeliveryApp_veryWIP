import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer'
import rootSaga from './sagas'

const reducer = combineReducers ({ rootReducer })
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
   ,
)

sagaMiddleware.run(rootSaga)



export default store

// import { compose, createStore, applyMiddleware } from 'redux';

// import rootReducer from './rootReducer';

// // eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, composeEnhancers(applyMiddleware()));