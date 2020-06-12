import { getResturantsAction, postOrderAction, addItemToCartAction, removeItemToCartAction } from './actionTypes'

export const getResturants = () => ({ type: getResturantsAction })

export const addItemToCart = payload => ({ type: addItemToCartAction, payload })

export const removeItemFromCart = payload => ({ type: removeItemToCartAction, payload })

export const postOrder = () => ({ type: postOrderAction })
