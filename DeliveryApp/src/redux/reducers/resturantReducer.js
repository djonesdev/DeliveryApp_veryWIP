const initialState = {
    resturants: [],
    error: '',
    isLoading: false
}

export const resturantReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'GET_RESTURANTS': 
            return {
                ...state, 
                isLoading: true
            }
        case 'GET_RESTURANTS_FAILED': 
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case 'GET_RESTURANTS_SUCCESS': 
            return {
                ...state,
                resturants: payload,
                isLoading: false
            }
        default:
            return state
    }
}
