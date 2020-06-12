import React from 'react'
import { View, Text, SectionList, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import PlusIcon from '../../../plusIcon.png'



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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity
      onPress={() => onClickAddCart(title)}
      style={{
        width: 50,
        backgroundColor:'lightblue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:5,
        padding:4,
        margin: 4
      }}
    >
      <Image style={{ height: 40, width: 40 }} source={PlusIcon} />
    </TouchableOpacity>
     <TouchableOpacity
        onPress={() => onClickAddCart(title)}
        style={{
          width: 50,
          backgroundColor:'lightblue',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:"center",
          borderRadius:5,
          margin: 4,
          padding:4
        }}
      >
        <Image style={{ height: 40, width: 40 }} source={PlusIcon} />
      </TouchableOpacity>
  </View>
);

export function MenuPage({ route, navigation, resturant }) {
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
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "aliceblue",
      padding: 20,
      marginVertical: 8,
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      flex: 1
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
  