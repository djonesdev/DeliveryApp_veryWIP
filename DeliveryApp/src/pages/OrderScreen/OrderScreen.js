import React from 'react'
import { View, Text, SectionList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function onClickAddCart(data) {

  const itemcart = {
    food: data,
    quantity:  1,
    price: data.price
  }

  AsyncStorage.getItem('cart').then((datacart)=>{
      if (datacart !== null) {
        // We have data!!
        const cart = JSON.parse(datacart)
        cart.push(itemcart)
        AsyncStorage.setItem('cart',JSON.stringify(cart));
      }
      else {
        const cart  = []
        cart.push(itemcart)
        AsyncStorage.setItem('cart',JSON.stringify(cart));
      }
      alert("Add Cart")
    })
    .catch((err)=>{
      alert(err)
    })
}

export function MenuPage({ route, navigation, resturant }) {
  console.log(resturant[0].food, 'viewMenu')
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={resturant[0].food}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
        <TouchableOpacity
            onPress={() => onClickAddCart(item)}
            style={{
              width: 20,
              backgroundColor:'#33c37d',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:4
            }}>
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
            <View style={{width:10}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
  