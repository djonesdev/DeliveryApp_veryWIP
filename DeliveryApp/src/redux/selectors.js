export const selectResturants = state => state.resturants.resturants

export const selectResturantLoading = state => state.resturants.isLoading

export const selectResturant = (state, resturantId) => selectResturants(state).filter(resturant => resturant.id === resturantId)

export const selectOrder = state => state.cart.order