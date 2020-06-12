import React from 'react'
import { connect } from 'react-redux';
import { getResturants, addItemToCard } from '../../redux/actions';
import { selectResturant } from '../../redux/selectors';
import { MenuPage } from './OrderScreen'

function MenuPageContainer({ route, navigation, resturant, addItemToCart }) {
  return (
    <MenuPage 
      route={route} 
      navigation={navigation} 
      addItemToCart={addItemToCart} 
      resturant={resturant(route.params.resturantId)} 
    />
  )
}

const mapStateToProps = (state) =>  ({
  resturant: (resturantId) => selectResturant(state, resturantId)  
})

const mapDispatchToProps = dispatch => ({
  getResturants: () => dispatch(getResturants()),
  addItemToCart: () => dispatch(addItemToCart({
    resturantName: 'KFC', 
    resturantId: "MOCK_KEY",
    orderTotalCost: 35,
    foodItems: [
        {
            itemName: 'MOCK_ITEM', 
            quantity: 2,
        },
        {
            itemName: 'MOCK_ITEM_2', 
            quantity: 1,
        },
        {
            itemName: 'MOCK_ITEM_3', 
            quantity: 1,
        }
    ]
}))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageContainer)

