import React from 'react'
import { connect } from 'react-redux';
import { getResturants } from '../../redux/actions';
import { selectResturant } from '../../redux/selectors';
import { MenuPage } from './OrderScreen'

function MenuPageContainer({ route, navigation, resturant }) {
  return <MenuPage route={route} navigation={navigation} resturant={resturant(route.params.resturantId)} />
}

  const mapStateToProps = (state) =>  ({
    resturant: (resturantId) => selectResturant(state, resturantId)  
})

const mapDispatchToProps = dispatch => ({
    getResturants: () => dispatch(getResturants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageContainer)

