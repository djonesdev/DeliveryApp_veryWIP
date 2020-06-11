import { createStore, combineReducers, applyMiddleware } from 'redux'

import rootReducer from './rootReducer'

const reducer = combineReducers ({ rootReducer })

const store = createStore(
    reducer,
)

export default store