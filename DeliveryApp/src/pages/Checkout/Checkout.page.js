import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { postOrder } from '../../redux/actions';
import { selectOrder } from '../../redux/selectors';
import Checkout from './Checkout';

const CheckoutContainer = (props) => { 

    function postOrder() {
        props.postOrder()
    }

    return <Checkout basket={props.basket} onPressOrder={postOrder} />
}

const mapStateToProps = (state) =>  ({
    basket: selectOrder(state)  
})

const mapDispatchToProps = dispatch => ({
    postOrder: () => dispatch(postOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
