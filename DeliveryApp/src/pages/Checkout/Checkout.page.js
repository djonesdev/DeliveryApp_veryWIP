import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { postOrder } from '../../redux/actions';
import { selectOrder } from '../../redux/selectors';
import Checkout from './Checkout';

const CheckoutContainer = (props) =>{ 
    console.log(props.basket, 'checkout basket')

return(
    <View>  
        <Checkout basket={props.basket} />
        <Button title="Press me" onPress={props.postOrder}/>
    </View>
)}

const mapStateToProps = (state) =>  ({
    basket: selectOrder(state)  
})

const mapDispatchToProps = dispatch => ({
    postOrder: () => dispatch(postOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
