const initialState = {
    data: [
        {
            name: "Mcdonalds",
            food: [{ itemName: "Fries", img: '' }]
        },
        {
            name: "KFC",
            food: [{ itemName: "Chicken", img: '' }]
        }
    ],
}

export const resturantReducer = (state = initialState, action)  => {
    const { payload } = action
    switch (action.type) {
        case 'SIMPLE_ACTION': 
            return {
                ...state, 
                data: payload
            }
        default:
            return state
    }
}