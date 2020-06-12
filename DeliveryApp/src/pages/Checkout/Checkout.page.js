import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { postOrder } from '../../redux/actions';
import { selectResturants } from '../../redux/selectors';
import Checkout from './Checkout';

const CheckoutContainer = (props) => (
    <View>  
        <Checkout />
        <Button title="Press me" onPress={props.postOrder}/>
    </View>
);

const mapStateToProps = (state) =>  ({
    resturants: selectResturants(state)  
})

const mapDispatchToProps = dispatch => ({
    postOrder: () => dispatch(postOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
