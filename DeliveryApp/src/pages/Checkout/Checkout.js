import React from 'react';
import { Text, View } from 'react-native';

const Checkout = (props) => {
    console.log(props.basket.foodItems, 'checkout props')
    return (
    <View>
        <Text>Checkout</Text>
        {props.basket.foodItems.map(() => <Text>names</Text>)}
    </View>
)};

export default Checkout;
