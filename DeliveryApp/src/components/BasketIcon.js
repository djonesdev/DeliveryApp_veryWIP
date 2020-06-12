import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import basketIcon from '../../download.png'


export const BasketIcon = ({ navigation }) => {
  console.log(navigation, 'navigation')
  return(
    <TouchableOpacity
      onPress={() => navigation.navigate('Menu', { resturantId: item.id })}
      title="Info"
      color="red"
    >
    <Image style={{ height: 45, width: 45, margin: 15 }} source={basketIcon} />
  </TouchableOpacity>
);}

  