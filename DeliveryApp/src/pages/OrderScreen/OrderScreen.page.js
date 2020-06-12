import React from 'react'
import { connect } from 'react-redux';
import { getResturants, addItemToCart, removeItemFromCart } from '../../redux/actions';
import { selectResturant, selectOrder } from '../../redux/selectors';
import { MenuPage } from './OrderScreen'

function MenuPageContainer({ route, navigation, resturant, addItemToCart, removeItemFromCart, basket }) {
  const selectedResturant = resturant(route.params.resturantId)

  console.log(basket, 'basket')
  const onPressAddItem = (item) => {
    addItemToCart({ 
      resturantName: selectedResturant[0].name, 
      resturantId: selectedResturant[0].id, 
      foodItems:
        { 
          itemName: item.itemName, 
          quantity: 2,
        }
    })
  }

  return (
    <MenuPage 
      route={route} 
      addItemToCart={onPressAddItem} 
      removeItemFromCart={removeItemFromCart}
      resturant={selectedResturant} 
    />
  )
}

const mapStateToProps = (state) =>  ({
  resturant: (resturantId) => selectResturant(state, resturantId),
  basket: selectOrder(state)
})

const mapDispatchToProps = dispatch => ({
  getResturants: () => dispatch(getResturants()),
  addItemToCart: (payload) => dispatch(addItemToCart(payload)),
  removeItemFromCart: (payload) => dispatch(removeItemFromCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageContainer)

