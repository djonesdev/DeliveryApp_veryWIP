import React from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native'
import image from './mcdonalds-fries.0.0.jpg'

export function MainPage({ navigation, resturants }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
        data={resturants}
        renderItem={({ item }) => ( console.log(item.image),
          <TouchableOpacity 
            style={
              {     
                alignItems: "center",
                marginTop: 12,
                padding: 12,
                borderRadius: 8,
                color: "#666",
                backgroundColor: "#eaeaea",
                flex: 5,
              }
            }
            onPress={() => navigation.navigate('Menu', { resturantId: item.id })}
          >
            <Image source={{uri: `data:image/jpeg;base64,${item.image}`}} style={{ height: 300, width: 350 }}/>
            <Text style={{ flex: 1, alignItems: "flex-start", textAlign: 'left' }}>{item.name}</Text>
              </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
      </View>
    );
  }
