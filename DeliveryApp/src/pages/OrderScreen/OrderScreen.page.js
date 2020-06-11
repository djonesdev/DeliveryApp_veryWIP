import React from 'react'
import { View, Text, Button } from 'react-native'
import { MenuPage } from './OrderScreen'

export function MenuPageContainer({ route, navigation }) {
  alert(route.params.resturantId)
    return <MenuPage route={route} navigation={navigation} />
  }