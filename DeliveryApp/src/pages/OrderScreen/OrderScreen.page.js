import React from 'react'
import { connect } from 'react-redux';
import { getResturants } from '../../redux/actions';
import { selectResturants } from '../../redux/selectors';
import { MenuPage } from './OrderScreen'

function MenuPageContainer({ route, navigation, resturants, resturant }) {
  alert(resturants)
  console.log(resturant(route.params.resturantId, 'resturant'))
    return <MenuPage route={route} navigation={navigation} resturantMenu={resturants} />
  }

  const mapStateToProps = (state) =>  ({
    resturant: (resturantId) => selectResturant(state, resturantId)  
})

const mapDispatchToProps = dispatch => ({
    getResturants: () => dispatch(getResturants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageContainer)

