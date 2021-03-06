const initialState = {
    order: {
        resturantName: '', 
        resturantId: '', 
        foodItems: []
    }, 
    error: ''
}

export const cartReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': 
            return {
                ...state, 
                order: { 
                    resturantName: payload.resturantName, 
                    resturantId: payload.resturantId, 
                    foodItems: [ ...state.order.foodItems, payload.foodItems] 
                }
            }
        case 'REMOVE_ITEM_FROM_CART': 
        state.order.foodItems.splice(payload, 1)
            return {
                ...state, 
                order: { 
                    foodItems: [ ...state.order.foodItems ]
                }
            }
        case 'POST_ORDER': 
            return {
                ...state,
            }
        case 'POST_ORDER_FAILED': 
            return {
                ...state,
                error: payload
            }
        case 'POST_ORDER_SUCCESS': 
            return {
                ...state,
                order: {}, 
                error: ''
            }
        default:
            return state
    }
}
