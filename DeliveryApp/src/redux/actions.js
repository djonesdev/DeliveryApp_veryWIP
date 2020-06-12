import { getResturantsAction, postOrderAction, addItemToCartAction } from './actionTypes'

export const getResturants = () => ({ type: getResturantsAction })


export const addItemToCart = payload => ({ type: addItemToCartAction, payload })

export const postOrder = () => ({ type: postOrderAction })
