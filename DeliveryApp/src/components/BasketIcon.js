import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import basketIcon from '../media/download.png'


function BasketIcon(props) {
  return(
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Checkout')}
      title="Info"
      color="red"
    >
      <Image style={{ height: 45, width: 45, margin: 15 }} source={basketIcon} />
    </TouchableOpacity>
  );
}

export default BasketIcon