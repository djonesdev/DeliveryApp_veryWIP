import React from 'react'
import { View, Text, Button } from 'react-native'

export function MenuPage({ route, navigation }) {
  alert(route.params.resturantId)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }