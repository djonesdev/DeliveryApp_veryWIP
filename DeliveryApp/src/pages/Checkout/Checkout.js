import React from 'react';
import { Text, View, Button } from 'react-native';

const Checkout = ({ onPressOrder, basket }) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Checkout</Text>
        {basket.foodItems.map((item, index) => <Text key={index}>{item.itemName}</Text>)}
        <Button title="Press me to order" onPress={() => onPressOrder()}/>
    </View>
)};

export default Checkout;
