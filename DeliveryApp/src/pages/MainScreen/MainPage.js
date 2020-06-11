import React from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native'
import image from './mcdonalds-fries.0.0.jpg'

export function MainPage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
        data={[
            {
                name: "Mcdonalds",
                food: [{ itemName: "Fries", img: '' }]
            },
            {
                name: "KFC",
                food: [{ itemName: "Chicken", img: '' }]
            }
        ]}
        renderItem={({ item }) => 
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
                    onPress={() => navigation.navigate('Menu', { resturantId: item.name })}
                >
            <Image source={image} style={{ height: 300, width: 350 }}/>
            <Text style={{ flex: 1, alignItems: "flex-start", textAlign: 'left' }}>{item.name}</Text>
        </TouchableOpacity>}
        keyExtractor={item => item.name}
      />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
    );
  }
