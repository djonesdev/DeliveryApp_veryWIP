const initialState = {
    data: [],
    resturants: []
}

export const resturantReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'GET_RESTURANTS': 
            return {
                ...state, 
            }
        default:
            return state
    }
}