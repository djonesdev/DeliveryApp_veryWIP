export const selectResturants = state => state.resturants.resturants

export const selectResturant = (state, resturantId) => selectResturants(state).filter(resturant => resturant.id === resturantId)