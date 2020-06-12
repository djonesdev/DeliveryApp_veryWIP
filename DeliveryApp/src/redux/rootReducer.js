import { combineReducers } from 'redux';
import { resturantReducer as resturants } from './reducers/resturantReducer'
import { cartReducer as cart } from './reducers/basketReducer'

export default combineReducers({
    resturants, 
    cart
})