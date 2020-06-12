const initialState = {
    order: {}, 
    error: ''
}

export const cartReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': 
            return {
                ...state, 
                order: payload
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
